const User = require("../models/User");
const Dog = require("../models/Dog");

const runSeed = async () => {
  await User.sync({ force: true });
  await Dog.sync({ force: true });

  const testUser = await User.createAuth({
    username: "testuser",
    password: "password"
  });

  const alvinUser = await User.createAuth({
    username: "alvin",
    password: "azab"
  });

  // console.table(await User.findAll({ raw: true }));

  const sam = await Dog.create({
    name: "Sam",
    breed: "Golden Retriever",
    sex: "Male",
    fixed: true,
    age: 3,
    color: "Tan",
    weight: 60,
    personality: "Likes to play with female dogs",
    imageUrl: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2MzI1NjA0Mjg5Njg0Nzg0/golden-retriever-names.png",
  })

  const snoopy = await Dog.create({
    name: "Snoopy",
    breed: "Beagle",
    sex: "Male",
    fixed: false,
    age: 5,
    color: "Spotted White",
    weight: 20,
    personality: "Friendly with white dogs only",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61HH_JHUask1XWL2wirG_G2xO_ijvVvSHiQ&usqp=CAU",
  })

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
