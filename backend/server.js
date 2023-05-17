const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserController = require("./controllers/user-controller");
const DogController= require("./controllers/dog-controller");
const DogDateController = require("./controllers/dog-date-controller")
const SessionMiddleware= require("./middleware/session-middleware");

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Barkr backend API'});
});

app.post("/users", UserController.createUser);
app.post("/users/session", UserController.createSession);
app.get("/dogs", SessionMiddleware.applySession, DogController.getDogs);
app.get("/dogs/:dogId", SessionMiddleware.applySession, DogController.getDogById);
app.post("/dogs", SessionMiddleware.applySession, DogController.createDog);
app.put("/dogs/:dogId", SessionMiddleware.applySession, DogController.updateDogById);
app.get("/dates", DogDateController.getDogDates);
app.get("/dates/:dateId", DogDateController.getDogDateById);
app.post("/dates", SessionMiddleware.applySession, DogDateController.createDogDate);
app.put("/dates/:dateId", SessionMiddleware.applySession, DogDateController.updateDogDateById);
app.delete("/dates/:dateId", SessionMiddleware.applySession, DogDateController.deleteDogDateById);
app.post("/dates/:dateId/dogs/:dogId", SessionMiddleware.applySession, DogDateController.addDogToDogDate);
app.delete("/dates/:dateId/dogs/:dogId", SessionMiddleware.applySession, DogDateController.deleteDogFromDogDate);

// TODO:
// const port = 3001;
const port = 80;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
