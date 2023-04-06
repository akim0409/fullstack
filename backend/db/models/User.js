const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../index');

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
});

User.createAuth = async ({ username, password }) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return await User.create({username, password: hashPassword});
};

User.checkAuth = async ({ username, password }) => {
  const user = await User.findOne({
    where: { username }
  });

  if (user === null) {
    return false;
  } else {
    return await bcrypt.compare(password, user.password);
  }
}

sequelize.sync();

module.exports = User;