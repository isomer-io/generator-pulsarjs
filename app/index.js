var yeoman = require('yeoman-generator'),
    githubdownload = require('github-download'),
    yosay = require('yosay'),
    mkdirp = require('mkdirp');

var launchGenerator = yeoman.Base.extend({
    initializing:function(){
      var generator = this;
      var ghDone = generator.async();
      githubdownload("https://github.com/isomer-io/pulsarjs/", generator.sourceRoot()).on('end', function(){
        generator.log('repo downloaded to ' + generator.sourceRoot());

        ghDone();
      })

      .on('error',function(err){
        console.error(err);
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
