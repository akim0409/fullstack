const User = require("../models/User");
const Dog = require("../models/Dog");
const DogDate = require("../models/DogDate");
const associations = require("../models/associations");

const runSeed = async () => {
  await User.sync({ force: true });
  await Dog.sync({ force: true });
  await DogDate.sync({ force: true });

  const testUser = await User.createAuth({
    username: "testuser",
    password: "password",
  });

  const autumnUser = await User.createAuth({
    username: "autumn",
    password: "akim",
  });

  const alvinUser = await User.createAuth({
    username: "alvin",
    password: "azab",
  });

  const donaldUser = await User.createAuth({
    username: "donald",
    password: "dliu",
  });

  const juneUser = await User.createAuth({
    username: "june",
    password: "jchoi",
  });

  const mikeUser = await User.createAuth({
    username: "mike",
    password: "myoon",
  });

  await testUser.createDog({
    name: "Max",
    breed: "Golden Retriever",
    sex: "Male",
    fixed: true,
    age: 3,
    color: "Tan",
    weight: 60,
    favoriteGame: "Digging",
    favoriteTreat: "Peanut Butter",
    personality:
      "Enjoys any games that involve retrieving objects; especially fetch using plain old sticks. Likes to play with female dogs. Very friendly, although sometimes can be too rough.",
    imageUrl:
      "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2MzI1NjA0Mjg5Njg0Nzg0/golden-retriever-names.png",
  });

  const skyler = await testUser.createDog({
    name: "Skyler",
    breed: "Siberian Husky",
    sex: "Female",
    fixed: true,
    age: 6,
    color: "Brown and White",
    weight: 50,
    favoriteGame: "Tug of War",
    favoriteTreat: "Pig Ear",
    personality:
      "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    imageUrl:
      "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
  });

  const bella = await alvinUser.createDog({
    name: "Bella",
    breed: "Yorkshire Terrier",
    sex: "Female",
    fixed: true,
    age: 5,
    color: "Silver and Brown",
    weight: 6,
    favoriteGame: "Hide & Seek",
    favoriteTreat: "Fruits",
    personality:
      `Initally wary and cautious around strangers, she takes a bit of time to warm up and establish trust. However, once she feels comfortable and safe, 
      her true affectionate nature shines through. She form deep bonds with her friends and become incredibly loyal and devoted.`,
    imageUrl:
      "https://a-z-animals.com/media/2021/08/Yorkshire-Terrier-1024x535.jpg",
  });

  const cooper = await alvinUser.createDog({
    name: "Cooper",
    breed: "Afghan Hound",
    sex: "Male",
    fixed: false,
    age: 3,
    color: "Tan",
    weight: 58,
    favoriteGame: "Running",
    favoriteTreat: "Dental Treats",
    personality:
      `He seeks tranquility and calmness, he fiinds solace in quiet environments. Cooper appreciates a peaceful atmosphere that allows him to relax 
      and unwind. Loud noises or chaotic surroundings can make him feel anxious or overwhelmed, so he prefer serene surroundings that promote a sense of security.
      Naturally, he preferes one-on-one date.`,
    imageUrl:
      "https://www.dogswiz.com/wp-content/uploads/sites/6/2022/03/Afghan-Hound.jpg",
  });

  const milo = await alvinUser.createDog({
    name: "Milo",
    breed: "Australian Kelpie",
    sex: "Male",
    fixed: true,
    age: 4,
    color: "Brown and Tan",
    weight: 32,
    favoriteGame: "Fetch",
    favoriteTreat: "Cheese",
    personality:
      `The company of a single person or dog is what Milo truly relishes. He thrives in one-on-one interactions, where he can receive undivided attention 
      and build a strong emotional connection through playtime. Whether it's long walks, playtime, or just cuddling on the couch, he values the intimacy and focused interaction of a personal bond and a new friend.`,
    imageUrl:
      "https://www.thesprucepets.com/thmb/BVWTmYnvlvOfh7Q3wuUAoC3GCM0=/2119x0/filters:no_upscale():strip_icc()/GettyImages-713869107-39e43f2374514fc89b06680938abd7bf.jpg",
  });

  const coco = await alvinUser.createDog({
    name: "Coco",
    breed: "Airedale Terrier",
    sex: "Female",
    fixed: true,
    age: 7,
    color: "Black and Brown",
    weight: 50,
    favoriteGame: "Frisbee",
    favoriteTreat: "Tendons",
    personality:
      `Once Coco established trust, she becomes incredibly loyal and attached to her dog friends. She's always by their side, eagerly participating
      in activities and providing an unwavering playmate. Her friendliness and joy for play knows no bounds, and she will go to great lengths to protect and support her friends.`,
    imageUrl:
      "https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/1115/hodowla-airedale-terriera.jpg",
  });

  const tucker = await autumnUser.createDog({
    name: "Tucker",
    breed: "Dalmatian",
    sex: "Male",
    fixed: false,
    age: 2,
    color: "White, Brown spots",
    weight: 25,
    favoriteGame: "Swimming",
    favoriteTreat: "Turkey",
    personality:
      `Tucker is a sensitive dog that has separation anxiety. When left alone, he expresses his distress through barking or
      behaviors such as whimpering or pacing. However, once he spends time with another dog; he is very friendly. Tucker genuinely craves the presence of human and feel most secure when I am in close proximity.`,
    imageUrl: "https://assets.orvis.com/is/image/orvisprd/AdobeStock_67705847",
  });

  const oliver = await autumnUser.createDog({
    name: "Oilver",
    breed: "Bernese Mountain",
    sex: "Male",
    fixed: true,
    age: 7,
    color: "White and black",
    weight: 91,
    favoriteGame: "Tug of War",
    favoriteTreat: "Beef Liver",
    personality:
      `Beneath Oliver's initial wariness lies a gentle and affectionate nature. Once he feels secure, he opens up and becomes a warm and loving playmate. Oliver enjoys 
      physical closeness and rough play and will seek opportunities to snuggle up and share tender moments with his dog friends after playtime. He barks a lot.`,
    imageUrl:
      "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
  });

  const daisy = await autumnUser.createDog({
    name: "Daisy",
    breed: "Border Collie",
    sex: "Female",
    fixed: true,
    age: 7,
    color: "Black and White",
    weight: 44,
    favoriteGame: "Tug of War",
    favoriteTreat: "Bully Stick",
    personality:
      `While Daisy may initially be reserved around unfamiliar dogs or large groups, she can develop close friendships with compatible dog friends. Female dogs preferred.
      With the right introduction in a calm setting, she can thrive in the company of like-minded furry friends. She appreciates a select circle of trusted companions with whom she can play endless tug of war with.`,
    imageUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg",
  });

  //
  const george = await autumnUser.createDog({
    name: "George",
    breed: "Border Collie",
    sex: "Male",
    fixed: true,
    age: 2,
    color: "Black and White",
    weight: 50,
    favoriteGame: "Running",
    favoriteTreat: "Lamb",
    personality:
      `Beneath his initial wariness lies a gentle and affectionate nature. Once George feel secure, he opens up and becomes a warm and loving playmate. He enjoys 
      physical closeness and rough play and will seek opportunities to snuggle up and share tender moments with his dog friends after playtime. He barks a lot.`,
    imageUrl:
      "https://www.hepper.com/wp-content/uploads/2021/11/Male-Blue-Merle-Border-Collie_ForeverNaturalPhotography_Shutterstock.jpg",
  });

  const otto = await autumnUser.createDog({
    name: "Otto",
    breed: "French Bulldog",
    sex: "Male",
    fixed: true,
    age: 3,
    color: "Blue and White",
    weight: 25,
    favoriteGame: "Fetch",
    favoriteTreat: "Rabbit",
    personality:
    `Otto's friendliness and joy for play knows no bounds. She thrives in one-on-one interactions, where she can receive undivided attention 
    and build a strong emotional connection through playtime. Whether it's long walks, playtime, or just cuddling on the couch, 
    she values the intimacy and focused interaction of a personal bond and a new friend.`,
    imageUrl: "https://www.alxnow.com/files/2022/03/AWLA-Lilac-1.jpg",
  });

  const cream = await autumnUser.createDog({
    name: "Toto",
    breed: "Chihuahua",
    sex: "Female",
    fixed: true,
    age: 8,
    color: "Tan",
    weight: 5,
    favoriteGame: "Swimming",
    favoriteTreat: "Chicken",
    personality:
      `The company of a single person or dog is what Toto truly relishes. She thrives in one-on-one interactions, where she can receive undivided attention 
      and build a strong emotional connection through playtime. Whether it's long walks, playtime, or just cuddling on the couch, she values the intimacy and focused interaction of a personal bond and a new friend.`,
    imageUrl:
      "https://media-be.chewy.com/wp-content/uploads/2021/04/01194949/chihuahua-laying-on-floor-1024x615.jpg",
  });

  const taco = await donaldUser.createDog({
    name: "Taco",
    breed: "Pit Bull Terrier",
    sex: "Male",
    fixed: true,
    age: 5,
    color: "Light Brown",
    weight: 40,
    favoriteGame: "Tug of War",
    favoriteTreat: "Beef Strip",
    personality:
    `Once Taco has established trust, he becomes incredibly loyal and attached to his dog friends. He is always by their side, eagerly participating
    in activities and providing an unwavering playmate. Taco's friendliness and joy for play knows no bounds, and he will go to great lengths to protect and support his friends.`,
    imageUrl:
      "https://media-be.chewy.com/wp-content/uploads/2021/06/11164440/American-Pit-Bull-terrier-1143880146-951x615.jpg",
  });

  const diamond = await donaldUser.createDog({
    name: "Diamond",
    breed: "German Shepherd",
    sex: "Female",
    fixed: true,
    age: 8,
    color: "Brown",
    weight: 60,
    favoriteGame: "Digging",
    favoriteTreat: "Turkey",
    personality:
      `Diamond prefers to play with small dogs only and are intimidated by large breeds. She finds comfort in familiar surroundings, so playdates will be at her usual parks.
      Loud noises and too many dogs or people can unsettle her, so Diamond appreciate a stable and consistent environment that allows her to feel grounded and at ease.`,
    imageUrl:
      "https://www.hepper.com/wp-content/uploads/2021/11/a-liver-german-shepherd-dog_Eudyptula_Shutterstock.jpg",
  });

  const bear = await juneUser.createDog({
    name: "Bear",
    breed: "Welsh Corgi",
    sex: "Male",
    fixed: false,
    age: 2,
    color: "White and Tan",
    weight: 25,
    favoriteGame: "Hide & Seek",
    favoriteTreat: "Eggs",
    personality:
      "Weary of strangers at first, but becomes very warm onces comfortable. Not comfortable in big groups, prefers a one-on-one date. Tends to cry when away from humans.",
    imageUrl: "https://cdn.buttercms.com/ZF8K2t8hT8OoNR3W42bX",
  });

  const leo = await juneUser.createDog({
    name: "Leo",
    breed: "Poodle Mix",
    sex: "Male",
    fixed: true,
    age: 1,
    color: "Black and White",
    weight: 15,
    favoriteGame: "Fetch",
    favoriteTreat: "Vegetables",
    personality:
    `Once Leo has established trust, he becomes incredibly loyal and attached to his dog friends. He is always by their side, eagerly participating
    in activities and providing an unwavering playmate. Leo's friendliness and joy for play knows no bounds, and he will go to great lengths to protect and support his friends.`,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/cavachon-puppy-running-towards-the-camera-royalty-free-image-499871758-1563379541.jpg",
  });

  const lola = await juneUser.createDog({
    name: "Lola",
    breed: "Akita Inu",
    sex: "Female",
    fixed: true,
    age: 7,
    color: "Brown and White",
    weight: 70,
    favoriteGame: "Frisbee",
    favoriteTreat: "Cheese",
    personality:
    `Lola possesses an acute awareness of her surroundings and are sometime anxious. Lola is highly observant and attuned to her environment. Some call my dog skittish, but she's just a little ancy.
      She loves rough play, and are still gentle with smaller breed playmates.`,

    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/004/704/919/non_2x/a-cute-akita-inu-dog-lies-on-the-green-grass-of-the-city-lawn-photo.jpg",
  });

  const snow = await mikeUser.createDog({
    name: "Snow",
    breed: "Jindo",
    sex: "Male",
    fixed: false,
    age: 4,
    color: "White",
    weight: 40,
    favoriteGame: "Swimming",
    favoriteTreat: "Peanut Butter", 
    personality:
      `They are always eager to please and make new friends. 
      They enjoy physical closeness and rough play and will seek opportunities to snuggle up and share tender moments with their dog friends after playtime. 
      They bark a lot. They genuinely crave the presence of me and feel most secure when I am in close proximity.`,
    imageUrl:
      "https://www.omlet.us/images/cache/512/341/Korean-Jindo-Outside.jpg",
  });

  const testDate1 = await DogDate.create({
    location: "Overpeck Park, Leonia, NJ",
    activity: "Fetch",
    maxNumberDogs: 3,
    date: new Date("2023-07-01 14:30:00"),
  });

  const testDate2 = await DogDate.create({
    location: "Central Park, Bow Bridge",
    activity: "Tug of War",
    maxNumberDogs: 2,
    date: new Date("2024-04-09 12:00:00"),
  });

  const testDate3 = await DogDate.create({
    location: "Prospect Park, Breeze Hill",
    activity: "Frisbee",
    maxNumberDogs: 7,
    date: new Date("2024-05-27 16:00:00"),
  });

  const testDate4 = await DogDate.create({
    location: "Brookdale Park, Montclair, NJ",
    activity: "Swimming",
    maxNumberDogs: 5,
    date: new Date("2023-09-03 13:30:00"),
  });

  const testDate5 = await DogDate.create({
    location: "Westcrest Park, Seattle, WA",
    activity: "Digging",
    maxNumberDogs: 4,
    date: new Date("2023-10-12 15:45:00"),
  });

  const testDate6 = await DogDate.create({
    location: "Yosemite National Park",
    activity: "Hide & Seek",
    maxNumberDogs: 2,
    date: new Date("2023-11-24 11:00:00"),
  });

  const testDate7 = await DogDate.create({
    location: "Fuller Dog Park, Denver, CO",
    activity: "Running",
    maxNumberDogs: 6,
    date: new Date("2024-01-28 10:00:00"),
  });

  await testDate1.addGuest(snow);
  await testDate1.addGuest(tucker);
  await testDate2.addGuest(george);
  await testDate2.addGuest(daisy);
  await testDate3.addGuest(otto);
  await testDate3.addGuest(milo);
  await testDate3.addGuest(bella);
  await testDate3.addGuest(lola);
  await testDate4.addGuest(oliver);
  await testDate4.addGuest(leo);
  await testDate4.addGuest(cream);
  await testDate4.addGuest(coco);
  await testDate5.addGuest(skyler);
  await testDate5.addGuest(taco);
  await testDate6.addGuest(diamond);
  await testDate7.addGuest(milo);
  await testDate7.addGuest(snow);
  await testDate7.addGuest(cooper);
  await testDate7.addGuest(tucker);
  await testDate7.addGuest(bear);
};

runSeed();

