var yeoman = require('yeoman-generator');

var launchGenerator = yeoman.Base.extend({
    copyBoilerplate: function() {
        this.directory('.meteor','.meteor');
        this.directory('collections','collections');
        this.directory('packages','packages');
        this.directory('pages','pages');
    }
});

module.exports = launchGenerator;
