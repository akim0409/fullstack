const sequelize = require("../index");
const User = require("./User");
const Dog = require("./Dog");


User.hasMany(Dog);
Dog.belongsTo(User);

sequelize.sync();