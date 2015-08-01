Package.describe({
  name: 'wesleyfsmith:pulsarjs',
  version: '0.0.1',
  documentation: 'https://github.com/isomer-io/pulsarjs/blob/master/readme.md',
  git: 'https://github.com/isomer-io/pulsarjs'
});

Package.onUse(function(api) {
  api.use(["templating",'tracker','session'], "client");

  api.use("meteorhacks:async@1.0.0", "server");

  api.use([
    "mrgalaxy:stripe@2.1.0",
    "orionjs:core@1.1.0",
    "iron:router@1.0.9",
    "meteorhacks:async@1.0.0",
    "spacebars","ongoworks:security","nicolaslopezj:roles", 'alethes:pages',
      'wesleyfsmith:pulsarjs-security',
      'wesleyfsmith:pulsarjs-config',
      "wesleyfsmith:pulsarjs-payments",
      'wesleyfsmith:pulsarjs-reviews','wesleyfsmith:pulsarjs-imagecrop'
  ], ["client", "server"]);

  api.versionsFrom('METEOR@1.1.0.2');

  api.export('Pulsar');

});
