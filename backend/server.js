const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserController = require("./controllers/user-controller");
const DogController = require("./controllers/dog-controller");
const DogDateController = require("./controllers/dog-date-controller")
const SessionMiddleware = require("./middleware/session-middleware");
const CONFIG = require("./config.js");
const DogDate = require("./db/models/DogDate");
const { Op } = require('sequelize');

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// TODO: move this middleware into middleware/clear-past-date middleware
// app.use(ClearDateMiddleware.clearPastDate)
app.use( async (req, res, next) => {
  await DogDate.destroy({
    where: { date: {
      [Op.lte]: new Date()
    }},
    raw: true
  })
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: `Barkr ${CONFIG.ENVIRONMENT} API`});
});

app.post("/users", UserController.createUser);
app.post("/users/session", UserController.createSession);
app.get("/dogs", SessionMiddleware.applySession, DogController.getDogs);
app.get("/dogs/:dogId", SessionMiddleware.applySession, DogController.getDogById);
app.post("/dogs", SessionMiddleware.applySession, DogController.createDog);
app.put("/dogs/:dogId", SessionMiddleware.applySession, DogController.updateDogById);
app.delete("/dogs/:dogId", SessionMiddleware.applySession, DogController.deleteDogById);
app.get("/dates", SessionMiddleware.applySession, DogDateController.getDogDates);
app.get("/dates/:dateId", SessionMiddleware.applySession, DogDateController.getDogDateById);
app.post("/dates", SessionMiddleware.applySession, DogDateController.createDogDate);
app.put("/dates/:dateId", SessionMiddleware.applySession, DogDateController.updateDogDateById);
app.delete("/dates/:dateId", SessionMiddleware.applySession, DogDateController.deleteDogDateById);
app.post("/dates/:dateId/dogs/:dogId", SessionMiddleware.applySession, DogDateController.addDogToDogDate);
app.delete("/dates/:dateId/dogs/:dogId", SessionMiddleware.applySession, DogDateController.deleteDogFromDogDate);

app.listen(CONFIG.PORT, () => {
  console.log(`App listening on port ${CONFIG.PORT}`);
});
