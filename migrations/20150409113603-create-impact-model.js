"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("ImpactModels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      definition: {
        type: DataTypes.TEXT
      },
      category: {
        type: DataTypes.ENUM
      },
      type: {
        type: DataTypes.ENUM
      },
      brands: {
        type: DataTypes.JSON
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("ImpactModels").done(done);
  }
};