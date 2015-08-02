var yeoman = require('yeoman-generator'),
    githubdownload = require('github-download');

var launchGenerator = yeoman.Base.extend({
    initializing:function(){
      var sourceRoot = this.sourceRoot();
      var done = this.async();
      githubdownload("https://github.com/isomer-io/pulsarjs.git#master", this.sourceRoot()).on('end', function(){
        done();
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
