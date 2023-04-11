const User = require("../models/User");
const Dog = require("../models/Dog");
const associations = require("../models/associations");

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

  await testUser.createDog({
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

  await testUser.createDog({
      "name": "Sky",
      "breed": "Siberian Husky",
      "sex": "Female",
      "fixed": true,
      "age": 6,
      "color": "brown and white",
      "weight": 50,
      "personality": "Not comfortable in big groups, prefers a date",
      "imageUrl": "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg"
  });


  // const showDog = await testUser.getDogs({ raw: true });
  // console.log(showDog);


  // const testDog = await Dog.findOne({
  //   where : { name: 'Sky' }
  // })

  // const x = await testDog.getUser( { raw: true });
  // console.log(x);
  
};

runSeed();
