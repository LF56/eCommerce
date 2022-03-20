// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model

//id - integer, no null values, primary keys, auto-increment
//product_name - string, no null values
//price- decimal, no null value, validates that the value is a decimal
//stock- integer, no null values, set a default value of 10, valudates that value is numeric
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
