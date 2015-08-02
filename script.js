var replace = require('replace'),
    request = require('request'),
    unzip = require('unzip'),
    fs = require('fs'),
    md5 = require('md5'),
    https = require('https'),
    githubdownload = require('github-download'),
    inflections = require('underscore.inflections'),
    _ = require('underscore'),
    globby = require('globby'),
    mv = require('mv'),
    rimraf = require('rimraf');

var slugify = require("underscore.string/slugify");
var camelize = require("underscore.string/camelize");
var humanize = require("underscore.string/humanize");

var collectionName = "fucks";

var directory = "/Users/maxjohansen/projects/test"

var slugifiedName = slugify(collectionName);

var slugifiedPluralName = inflections.pluralize(slugifiedName);
var slugifiedSingularName = inflections.singularize(slugifiedName);

var replaceObj = {
    post: camelize(slugifiedSingularName),
    posts: camelize(slugifiedPluralName),
    Post: humanize(slugifiedSingularName),
    Posts: humanize(slugifiedPluralName)
};

var ghDir = "/tmp/pulsarjs";

var main = function(){

  githubdownload("https://github.com/isomer-io/pulsarjs.git#master", ghDir).on('end', function(){
    mv(ghDir + "/.meteor", directory + "/.meteor", {mkdirp:true}, function(err){
      if(err){
        console.error(err);
      } else {
          replace({
            regex: "Posts",
            replacement: replaceObj["Posts"],
            paths: [ghDir],
            recursive: true,
            silent:true,
          });

          replace({
            regex: "posts",
            replacement: replaceObj["posts"],
            paths: [ghDir],
            recursive: true,
            silent:true,
          });

          replace({
            regex: "Post",
            replacement: replaceObj["Post"],
            paths: [ghDir],
            recursive: true,
            silent:true,
          });

          replace({
            regex: "post",
            replacement: replaceObj["post"],
            paths: [ghDir],
            recursive: true,
            silent:true,
          });

          globby(ghDir + "/**/{*.js,*.html,*.css}",function(err,files){
            for(var i = 0; i < files.length; i++){
              var fileName = files[i].replace(/Posts/g, replaceObj["Posts"])
                .replace(/posts/g, replaceObj["posts"])
                .replace(/Post/g, replaceObj["Post"])
                .replace(/post/g, replaceObj["post"]).replace(ghDir, directory);

              mv(files[i], fileName, {mkdirp:true}, function(err){
                if(err){
                  console.error(err);
                }
              });
            }
          });


      }
    });

  }).on('error',function(err){
    console.error(err);
  });
};

fs.exists(ghDir, function(exists){
  if(exists){
    console.log("Pulsar already downloaded...removing and redownloading");

    rimraf(ghDir,function(err){
      if(err){
        console.error(err);
      }
      main();
    });
  } else {
    main();
  }
});
