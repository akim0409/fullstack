const DogDate = require("../db/models/DogDate");

const getDogDates = async (req, res) => {
  const dogDates = await DogDate.findAll();
  res.status(200).json(dogDates);
};


module.exports = {
  getDogDates
}