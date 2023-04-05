const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const User = require("./db/models/User");

const app = express();

app.use(cors({ credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

// POST /users  { username, password }
//    if username exists
//      -> 409, message: Username already exists
app.post("/users", async (req, res) => {
  const existingUser = await User.findOne({
    where: { username: req.body.username }
  });

  if (existingUser) {
    res.status(409).json({ message: "Username already exists"});
  } else {
    await User.createAuth(req.body);
    res.status(201).json({ message: 'User created'});
  }
});

// POST /users/session
app.post("/users/session", async (req, res) => {
  const isCorrect = await User.checkAuth(req.body);
  if (isCorrect) {
    res.status(200).json({ message: "Session granted"});
  } else {
    res.status(401).json({ message: "Session not authorized"});
  }
})


const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})