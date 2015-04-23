var api = require('./api');

module.exports = [
  {
    method: 'GET',
    path: '/api/users',
    handler: api.users.all
  },
  {
    method: 'GET',
    path: '/api/impactmodels',
    handler: api.impactmodels.all
  }
];
