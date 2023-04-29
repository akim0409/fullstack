const User = require("../db/models/User");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
  const existingUser = await User.findOne({
    where: { username: req.body.username },
  });

  if (existingUser) {
    res.status(409).json({ message: "Username already exists" });
  } else {
    const user = await User.createAuth(req.body);
    const token = jwt.sign({ username: user.username }, "mysecretprivatekey");
    res.status(201).cookie("token", token).json({ token });
  }
};

const createSession =  async (req, res) => {
  const isCorrect = await User.checkAuth(req.body);

  const token = jwt.sign({ username: req.body.username }, "mysecretprivatekey");

  if (isCorrect) {
    setTimeout(() => {
      res.status(200).cookie("token", token).json({ token });
    },2000)
  } else {
    setTimeout(() => {
    res.status(401).json({ message: "Session not authorized" });

    },2000)
  }
};



module.exports = {
  createUser,
  createSession
};