const User = require("../models/User");

const runSeed = async () => {
  await User.sync({ force: true });

  const testUser = await User.createAuth({
    username: "testuser",
    password: "password"
  });

  const alvinUser = await User.createAuth({
    username: "alvin",
    password: "azab"
  });

  // console.table(await User.findAll({ raw: true }));
};

runSeed();

// const foo = null;

// const doStuff = (person) => {
//   console.log(person.name);
// }

// try {
//   // doStuff({ name: 'alvin', occupation: 'teacher' });
//   doStuff(null);
// } catch (error) {
//   console.log(error.name);
//   console.log('oops there was an error I handled okay');
// } 

// console.log('after error!!!');
