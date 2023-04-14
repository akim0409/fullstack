const DogDate = require("../db/models/DogDate");

const getDogDates = async (req, res) => {
  const dogDates = await DogDate.findAll();
  res.status(200).json(dogDates);
};

const deleteDogDateById = async (req, res) => {
  await DogDate.destroy({
    where: { id: req.params.dateId}
  })
  res.status(200).json({ message: "DogDate deleted successfully"});
};

module.exports = {
  getDogDates,
  deleteDogDateById
}