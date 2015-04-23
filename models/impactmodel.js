"use strict";
module.exports = function(sequelize, DataTypes) {
  var ImpactModel = sequelize.define("ImpactModel", {
    name: DataTypes.STRING,
    definition: DataTypes.TEXT,
    category: DataTypes.ENUM('Market','Inventory/Goods','Jobs','Cash','Awareness','Services','Additional or Broad Models'),
    type: DataTypes.ENUM('product', 'service'),
    brands: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ImpactModel;
};
