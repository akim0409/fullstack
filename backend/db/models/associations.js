const sequelize = require("../index");
const User = require("./User");
const Dog = require("./Dog");
const DogDate = require("./DogDate");

User.hasMany(Dog);
User.hasMany(DogDate);
DogDate.belongsTo(User);
Dog.belongsTo(User);
Dog.belongsToMany(DogDate,  { through: 'Guest', as: 'dates' });
DogDate.belongsToMany(Dog, { through: 'Guest', as: 'guests' });

sequelize.sync();