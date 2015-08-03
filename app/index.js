var yeoman = require('yeoman-generator'),
    githubdownload = require('github-download'),
    yosay = require('yosay'),
    mkdirp = require('mkdirp');

var launchGenerator = yeoman.Base.extend({
    initializing:function(){
      var sourceRoot = this.sourceRoot();

      var release = "v0.1.1-beta";

      var generator = this;

      generator.log(yosay("Using pulsarjs release " + release));

      var mkdirpDone = generator.async();

      mkdirp(generator.sourceRoot() + '/' + release, function(err){
        if(err){
          if(err.code === "ENOTEMPTY"){
            generator.log('Looks like you already have release ' + release + '...proceeding');
          } else {
            generator.env.error("Unexpected error creating release directory");
          }
        } else {
          generator.log('Created release directory');
        }

        var ghDone = generator.async();
        githubdownload("https://github.com/isomer-io/pulsarjs/tree/" + release, generator.sourceRoot() + '/' + release).on('end', function(){
          generator.log('repo downloaded to ' + generator.sourceRoot() + '/' + release);

          ghDone();
        })

        .on('error',function(err){
          console.error(err);
        });

        mkdirpDone();
      });
    },
    copyBoilerplate: function() {
        this.directory('.meteor','.meteor');
        this.directory('collections/users','collections/users');
        this.directory('pages/homePage','pages/homePage');
        this.directory('pages/logInPage','pages/logInPage');
        this.directory('pages/profilePage','pages/profilePage');
    }
});

module.exports = launchGenerator;
