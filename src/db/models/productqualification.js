'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductQualification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductQualification.belongsTo(models.Product);
      // define association here
    }
  };
  ProductQualification.init({
    qualification: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProductQualification',
  });
  return ProductQualification;
};