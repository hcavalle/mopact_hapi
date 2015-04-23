var models = require('../models');

exports.users = {
  all: function(request, reply) {
    models.User.findAll()
      .then(function(users) {
        reply(users).code(200);
      });
  }
};
exports.impactmodels = {
  all: function(request, reply) {
    models.ImpactModel.findAll()
      .then(function(impactmodels) {
        reply(impactmodels).code(200);
      });
  }
};
