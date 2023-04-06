const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const User = require("./db/models/User");
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors({ credentials: true, origin: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

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

app.post("/users/session", async (req, res) => {
  const isCorrect = await User.checkAuth(req.body);

  const token = jwt.sign({ username: req.body.username }, 'mysecretprivatekey');
  
  if (isCorrect) {
    res.status(200).cookie("token", token).json({ message: "Session granted"});
  } else {
    res.status(401).json({ message: "Session not authorized"});
  }
});

// TESTING ONLY
// GET /users/session
  // if cookie does not exist, send 401

app.get("/users/session", async (req, res) => {
  const token = req.cookies.token
  if (token === undefined) {
    res.status(401).json({ message: "Token missing"});
  } else {
    try {
      const { username } = jwt.verify(token, 'mysecretprivatekey');
      res.status(200).json({ message: `Token verified, you are ${username}`});
    } catch (err) {
      res.status(401).json({ message: "Token invalid"});
    }
  }
})

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})