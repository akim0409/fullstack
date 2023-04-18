const Dog = require("../db/models/Dog")
const associations = require("../db/models/associations");


// https://sequelize.org/docs/v6/core-concepts/assocs/#foohasmanybar

const getDogs = async (req, res) => {
  const dogs = await Dog.findAll();
  
  if (req.user) {
    const dogObjects = [];
    for (let dog of dogs) {
      const owned = await req.user.hasDog(dog);
      const dogObj = dog.get({plain: true});
      dogObjects.push({ ...dogObj, owned });
    }
    res.status(200).json(dogObjects);
  } else {
    res.status(200).json(dogs);
  }
};
  

const createDog = async (req, res) => {
  if (req.user) {
    await req.user.createDog(req.body);
    res.status(201).json({ message: "Dog created" });
  } else {
    res.status(401).json({ message: "Must be signed in"});
  }
};

const getDogById = async (req, res) => {
  const dog = await Dog.findOne({
    where: {
      id: req.params.dogId
    }
  });

  if (!dog) {
    res.status(404).json({ message: "Dog not found"});
    return;
  }

  if (req.user) {
    const owned = await req.user.hasDog(dog);
    const dogObj = dog.get({ plain: true });
    res.status(200).json({ ...dogObj, owned });
  } else {
    res.status(200).json(dog);
  }
};

const updateDogById = async (req, res) => {
  const dog = await Dog.findOne({
    where: { id: req.params.dogId },
  });

  if (!dog) {
    res
      .status(404)
      .json({ message: `Dog with ID: ${req.params.dogId} does not exist` });
    return;
  }

  const owner = await dog.getUser();

  if (req.user && req.user.id === owner.id) {
    await Dog.update(req.body, {
      where: { id: req.params.dogId },
    });
    res
      .status(200)
      .json({
        message: `Dog with ID: ${req.params.dogId} updated successfully`,
      });
  } else {
    res.status(401).json({ message: "Not authorized to update"}); 
  }
}

module.exports = {
  getDogs,
  createDog,
  getDogById,
  updateDogById
}