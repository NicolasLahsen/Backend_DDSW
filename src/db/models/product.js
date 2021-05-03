'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.Tablet);
      Product.hasOne(models.Smartphone);
      Product.hasOne(models.TV);
      Product.hasMany(models.ProductQualification);
      Product.hasMany(models.Transaction);
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    ammount: DataTypes.INTEGER,
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};