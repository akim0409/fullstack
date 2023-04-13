const { DataTypes } = require("sequelize");
const sequelize = require("..");

  
const DogDate = sequelize.define('DogDate', {
  date: DataTypes.DATE,
  location: DataTypes.STRING,
  activity: DataTypes.STRING,
  maxNumberDogs: DataTypes.NUMBER
});

module.exports = DogDate;