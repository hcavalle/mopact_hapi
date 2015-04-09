var Hapi = require('hapi');
var config = require('./appconf.js');
var models = require('./models');
console.log(config);

var server = new Hapi.Server();
server.connection(config.application);

server.route({
  method:'GET',
  path: '/api',
  handler: function (req, reply) {
    reply({'api': 'hello!'});
  }
});

models.sequelize.sync().then(function() {
  server.start(function () {
    console.log('running on '+config.application.port);
  });
});
    
