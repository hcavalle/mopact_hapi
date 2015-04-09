var Hapi = require('hapi');
var config = require('./src/conf/conf.js');
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

server.start(function () {
  console.log('running on '+config.application.port);
});
    
