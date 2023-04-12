const { DataTypes } = require("sequelize");
const sequelize = require("..");

  
const Dog = sequelize.define('Dog', {
  name: DataTypes.STRING,
  breed: DataTypes.STRING,
  sex: DataTypes.STRING,
  fixed: DataTypes.BOOLEAN,
  age: DataTypes.NUMBER,
  color: DataTypes.STRING,
  weight: DataTypes.NUMBER,
  personality: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
});

module.exports = Dog;