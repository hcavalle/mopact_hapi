module.exports =  {
  import_json: function () {
    console.log('import called');
    var models = require('../models');
    var fs        = require("fs");
    var path      = require("path");
    var Sequelize = require("sequelize");
    var basename  = path.basename(module.filename);
    console.log(__dirname);
    fs
      .readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
      })
      .forEach(function(file) {
        var json = JSON.parse(fs.readFileSync(__dirname+'/'+file));
        console.log('json: ');
        console.log(json);
        for (var item in json) {
          models.ImpactModel.create({
            name: json[item].Model,
            definition: json[item].Definition,
            brands: json[item]['Sample Brands'],
            category: json[item].Categories,
            type: file
          }).then(function(imodel){
            console.log('created model: ');
          });
        }
      });
  }
};

