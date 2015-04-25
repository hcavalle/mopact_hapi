var Hapi = require('hapi');
var config = require('./appconf.js');
var models = require('./models');
var _import = require('./import/import.js');

var server = new Hapi.Server();
server.connection(config.application);

server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {
  server.start(function () {
    console.log('running on '+config.application.port);
  });
  _import.import_json();
}).catch(function(error) {
  console.log(error);
});

    
