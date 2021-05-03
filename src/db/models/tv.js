'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TV extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TV.belongsTo(models.Product);
    }
  };
  TV.init({
    screenSize: DataTypes.FLOAT,
    resolution: DataTypes.STRING,
    smart: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TV',
  });
  return TV;
};