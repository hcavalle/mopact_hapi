var Hapi = require('hapi');
var config = require('./appconf.js');
var models = require('./models');
console.log(config);

var server = new Hapi.Server();
server.connection(config.application);

server.route(require('./lib/routes'));

models.sequelize.sync({force: true}).then(function() {
  server.start(function () {
    console.log('running on '+config.application.port);
  });
}).catch(function(error) {
  console.log(error);
});

    
