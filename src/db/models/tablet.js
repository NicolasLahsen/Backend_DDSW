'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tablet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tablet.belongsTo(models.Product);
    }
  };
  Tablet.init({
    screenSize: DataTypes.FLOAT,
    memory: DataTypes.INTEGER,
    '3G': DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tablet',
  });
  return Tablet;
};