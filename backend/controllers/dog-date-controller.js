const DogDate = require("../db/models/DogDate");
const Dog = require("../db/models/Dog");
const associations = require("../db/models/associations");

const getDogDates = async (req, res) => {
  const dogDates = await DogDate.findAll();
  const newDates = [];

  for (let date of dogDates) {
    newDates.push({...date.get({plain: true}),  numberDogs: await date.countGuests() })
  }

  res.status(200).json(newDates);
};

const getDogDateById = async (req, res) => {
  const date = await DogDate.findOne({
    where: { id: req.params.dateId },
  });

  if (date) {
    res.status(200).json(date);
  } else {
    res.status(404).json({ message: "DogDate not found" });
  }
};

const createDogDate = async (req, res) => {
  if (req.user) {
    await DogDate.create(req.body);
    res.status(201).json({ message: "DogDate created" });
  } else {
    res.status(401).json({ message: "Must be signed in" });
  }
};

const updateDogDateById = async (req, res) => {
  const date = await DogDate.findOne({
    where: { id: req.params.dateId },
  });

  if (!date) {
    res
      .status(404)
      .json({
        message: `DogDate with ID: ${req.params.dateId} does not exist`,
      });
    return;
  }

  if (req.user) {
    await DogDate.update(req.body, {
      where: { id: req.params.dateId },
    });

    res.status(200).json({
      message: `DogDate with ID: ${req.params.dateId} updated successfully`,
    });
  } else {
    res.status(401).json({ message: "Not authorized to update" });
  }
};

const deleteDogDateById = async (req, res) => {
  if (req.user) {
    await DogDate.destroy({
      where: { id: req.params.dateId },
    });
    res.status(200).json({ message: "DogDate deleted successfully" });
  } else {
    res.status(401).json({ message: "Must be signed in" });
  }
};

const addDogToDogDate = async (req, res) => {
  const date = await DogDate.findOne({
    where: { id: req.params.dateId },
  });

  const dog = await Dog.findOne({
    where: { id: req.params.dogId },
  });

  const owner = await dog.getUser();

  const totalGuests = await date.countGuests();

  if (date.maxNumberDogs === totalGuests) {
    res.status(409).json({ message: "DogDate is full"});
  } else if (req.user && req.user.id === owner.id) {
    await date.addGuest(dog);
    res.status(200).json({
      message: `Dog with ID: ${req.params.dogId} added to date ID: ${req.params.dateId}`,
    });
  } else {
    res
      .status(401)
      .json({ message: `Not authorized to add dog id: ${req.params.dogId}` });
  }
};

module.exports = {
  getDogDates,
  getDogDateById,
  createDogDate,
  updateDogDateById,
  deleteDogDateById,
  addDogToDogDate
};
