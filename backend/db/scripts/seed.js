const User = require("../models/User");
const Dog = require("../models/Dog");
const DogDate = require("../models/DogDate");
const associations = require("../models/associations");

const runSeed = async () => {
  await User.sync({ force: true });
  await Dog.sync({ force: true });
  await DogDate.sync({ force: true});

  const testUser = await User.createAuth({
    username: "testuser",
    password: "password"
  });

  const alvinUser = await User.createAuth({
    username: "alvin",
    password: "azab"
  });

  const autumnUser = await User.createAuth({
    username: "autumn",
    password: "akim"
  })

  const donaldUser = await User.createAuth({
    username: "donald",
    password: "dliu"
  })

  const juneUser = await User.createAuth({
    username: "june",
    password: "jchoi"
  })

  const mikeUser = await User.createAuth({
    username: "mike",
    password: "myoon"
  })

  // console.table(await User.findAll({ raw: true }));

  await testUser.createDog({
    name: "Max",
    breed: "Golden Retriever",
    sex: "Male",
    fixed: true,
    age: 3,
    color: "Tan",
    weight: 60,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    personality: "Enjoys any games that involve retrieving objects; especially fetch using plain old sticks. Likes to play with female dogs. Very friendly, although sometimes can be too rough.",
    imageUrl: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2MzI1NjA0Mjg5Njg0Nzg0/golden-retriever-names.png",
  })

  await testUser.createDog({
      "name": "Skyler",
      "breed": "Siberian Husky",
      "sex": "Female",
      "fixed": true,
      "age": 6,
      "color": "Brown and White",
      "weight": 50,
      favoriteGame: "Tug of War",
    favoriteTreat: "Dried pig ear",
      "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
      "imageUrl": "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg"
  });

  await testUser.createDog({
    "name": "Daisy",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  });

  await alvinUser.createDog({
    "name": "Bella",
    "breed": "Yorkshire Terrier",
    "sex": "Female",
    "fixed": true,
    "age": 5,
    "color": "Silver and Brown",
    "weight": 6,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://a-z-animals.com/media/2021/08/Yorkshire-Terrier-1024x535.jpg"
  })

  await alvinUser.createDog({
    "name": "Cooper",
    "breed": "Afghan Hound",
    "sex": "Male",
    "fixed": false,
    "age": 3,
    "color": "Tan",
    "weight": 58,
    favoriteGame: "Hide & Seek",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.dogswiz.com/wp-content/uploads/sites/6/2022/03/Afghan-Hound.jpg"
  })

  await alvinUser.createDog({
    "name": "Milo",
    "breed": "Australian Kelpie",
    "sex": "Male",
    "fixed": true,
    "age": 4,
    "color": "Brown and Tan",
    "weight": 32,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.thesprucepets.com/thmb/BVWTmYnvlvOfh7Q3wuUAoC3GCM0=/2119x0/filters:no_upscale():strip_icc()/GettyImages-713869107-39e43f2374514fc89b06680938abd7bf.jpg"
  })

  await alvinUser.createDog({
    "name": "Coco",
    "breed": "Airedale Terrier",
    "sex": "Female",
    "fixed": true,
    "age": 7,
    "color": "Black and Brown",
    "weight": 50,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/1115/hodowla-airedale-terriera.jpg"
  })

  await autumnUser.createDog({
    "name": "Tucker",
    "breed": "Dalmatian",
    "sex": "Male",
    "fixed": false,
    "age": 2,
    "color": "White and Brown spots",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/330405595_1529711904217838_1720061593503141785_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MPmk-Kggiv0AX8Dw0iq&_nc_ht=scontent-lga3-2.xx&oh=00_AfASjU9HJTnkt0pGqZyW4Wh4fRvcOlAoOuTZKEFwXB7AKQ&oe=643C7B8A"
  })

  await autumnUser.createDog({
    "name": "Oilver",
    "breed": "Bernese Mountain",
    "sex": "Male",
    "fixed": true,
    "age": 7,
    "color": "White, Black, and Tan",
    "weight": 91,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg"
  })

  await autumnUser.createDog({
    "name": "Daisy",
    "breed": "Border Collie",
    "sex": "Female",
    "fixed": true,
    "age": 7,
    "color": "Black and White",
    "weight": 44,
    favoriteGame: "Agility Training",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg"
  })


  //
  await autumnUser.createDog({
    "name": "Otto",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Chase the Prey",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await autumnUser.createDog({
    "name": "Daisy",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await donaldUser.createDog({
    "name": "Taco",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await donaldUser.createDog({
    "name": "Diamond",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await juneUser.createDog({
    "name": "Bear",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await juneUser.createDog({
    "name": "Leo",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await juneUser.createDog({
    "name": "Lola",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })

  await mikeUser.createDog({
    "name": "Boba",
    "breed": "French Bulldog",
    "sex": "Female",
    "fixed": true,
    "age": 3,
    "color": "Blue and White",
    "weight": 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Dental Treats",
    "personality": "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    "imageUrl": "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg"
  })



  await DogDate.create({
    location: '42 candy mountain',
    activity: 'foodge',
    maxNumberDogs: 3,
    date: new Date('2023-04-15 14:29:00')
  });

  await DogDate.create({
    location: 'Central Park,Bow Bridge',
    activity: 'Tug of War',
    maxNumberDogs: 2,
    date: new Date()
  })

  await DogDate.create({
    location: 'Prospect Park, Breeze Hill',
    activity: 'Frisbee',
    maxNumberDogs: 4,
    date: new Date()
  })

  // console.log(await DogDate.findAll({raw: true}));
};

runSeed();
