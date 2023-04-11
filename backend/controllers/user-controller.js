const User = require("../db/models/User");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
  const existingUser = await User.findOne({
    where: { username: req.body.username },
  });

  if (existingUser) {
    res.status(409).json({ message: "Username already exists" });
  } else {
    await User.createAuth(req.body);
    res.status(201).json({ message: "User created" });
  }
};

const createSession =  async (req, res) => {
  const isCorrect = await User.checkAuth(req.body);

  const token = jwt.sign({ username: req.body.username }, "mysecretprivatekey");

  if (isCorrect) {
    res.status(200).cookie("token", token).json({ message: "Session granted" });
  } else {
    res.status(401).json({ message: "Session not authorized" });
  }
};


const getSession =  async (req, res) => {
  const token = req.cookies.token;
  if (token === undefined) {
    res.status(401).json({ message: "Token missing" });
  } else {
    try {
      const { username } = jwt.verify(token, "mysecretprivatekey");
      res.status(200).json({ message: `Token verified, you are ${username}` });
    } catch (err) {
      res.status(401).json({ message: "Token invalid" });
    }
  }
};


module.exports = {
  createUser,
  createSession,
  getSession
};