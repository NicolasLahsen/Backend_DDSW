'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Smartphone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Smartphone.belongsTo(models.Product);
    }
  };
  Smartphone.init({
    screenSize: DataTypes.FLOAT,
    memory: DataTypes.INTEGER,
    camera: DataTypes.INTEGER,
    microSD: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Smartphone',
  });
  return Smartphone;
};