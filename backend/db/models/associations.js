const sequelize = require("../index");
const User = require("./User");
const Dog = require("./Dog");
// const DogDate = require("./DogDate");

User.hasMany(Dog);
Dog.belongsTo(User);

sequelize.sync();