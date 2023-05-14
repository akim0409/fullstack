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
    const token = jwt.sign(
      { username: user.username, userId: user.id },
      "mysecretprivatekey"
    );
    res
      .status(201)
      .cookie("token", token, { domain: "autumn-kim-barkr-app.com" })
      .json({ token });
  }
};

const createSession = async (req, res) => {
  const isCorrect = await User.checkAuth(req.body);

  if (isCorrect) {
    const currentUser = await User.findOne({
      where: { username: req.body.username },
    });

    const token = jwt.sign(
      { username: req.body.username, userId: currentUser.id },
      "mysecretprivatekey"
    );

    res
      .status(200)
      .cookie("token", token, {
        domain: "autumn-kim-barkr-app.com",
      })
      .json({ token });
  } else {
    res.status(401).json({ message: "Session not authorized" });
  }
};

module.exports = {
  createUser,
  createSession,
};
