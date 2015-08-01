/**
 * Created by macsj200 on 6/3/15.
 */
var inflections = require('underscore.inflections'),
    yeoman = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    _ = require('underscore'),
    globby = require('globby');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
        init: function() {
            this.slugifiedName = _.slugify(this.name);

            this.slugifiedPluralName = inflections.pluralize(this.slugifiedName);
            this.slugifiedSingularName = inflections.singularize(this.slugifiedName);

            this.camelizedPluralName = _.camelize(this.slugifiedPluralName);
            this.camelizedSingularName = _.camelize(this.slugifiedSingularName);

            this.classifiedPluralName = _.classify(this.slugifiedPluralName);
            this.classifiedSingularName = _.classify(this.slugifiedSingularName);

            this.humanizedPluralName = _.humanize(this.slugifiedPluralName);
            this.humanizedSingularName = _.humanize(this.slugifiedSingularName);

            // this.replaceObject = {
            //   post: this.camelizedSingularName,
            //   posts: this.camelizedPluralName,
            //   Post: this.humanizedSingularName,
            //   Posts: this.humanizedPluralName
            // };
        },
        renderModule: function(){
          var generator = this;

          globby(generator.sourceRoot() + "/**/{*.js,*.html,*.css}",function(err,files){
            for(var i = 0; i < files.length; i++){
              files[i] = files[i].replace(generator.sourceRoot() + "/","");

              var fileName = files[i].replace(/Posts/g , generator.humanizedPluralName)
                .replace(/posts/g,generator.camelizedPluralName)
                .replace(/Post/g,generator.humanizedSingularName)
                .replace(/post/g,generator.camelizedSingularName);

              console.log(fileName);

              generator.template(files[i],fileName);
            }
          });


            // var pagesDir = 'pages/' + this.camelizedSingularName + 'CollectionPages';
            //
            // mkdirp(pagesDir);
            //
            // var pagesResources = [""];
            //
            // for(var i = 0; i < pagesResources.length; i++){
            //     var replacedString = pagesResources[i].replace('Post', this.humanizedSingularName).replace('post', this.camelizedSingularName)
            //         .replace('Posts', this.humanizedPluralName).replace('posts', this.camelizedPluralName);
            //
            //     this.template('pages/postPage/' + pagesResources[i], pagesDir + '/' + replacedString);
            // }
            //
            // var collectionDir = 'collections/' + this.humanizedPluralName;
            //
            // mkdirp(collectionDir);
            //
            // var collectionResources = ["findPosts.html", "findOnePost.html", "insertPost.html", "postInList.html", "postsCollection.js", "updatePost.html"];
            //
            // for(var i = 0; i < collectionResources.length; i++){
            //     var replacedString = collectionResources[i].replace('Post', this.humanizedSingularName).replace('post', this.camelizedSingularName)
            //         .replace('Posts', this.humanizedPluralName).replace('posts', this.camelizedPluralName);
            //
            //
            //     this.template('posts/' + collectionResources[i], collectionDir + '/' + replacedString);
            // }
        }
    }
);

module.exports = ModuleGenerator;