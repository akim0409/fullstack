const User = require("../models/User");

const runSeed = async () => {
  await User.sync({ force: true });

  const testUser = await User.create({
    username: "testuser",
    password: "password"
  });

  const alvinUser = await User.createAuth({
    username: "alvin",
    password: "azab"
  });

  console.table(await User.findAll({ raw: true }));
};

runSeed();

