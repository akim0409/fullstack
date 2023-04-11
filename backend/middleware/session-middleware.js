const User = require("../db/models/User");
const jwt = require("jsonwebtoken");

const applySession = async (req, res, next) => {
  const token = req.cookies.token;
  
  try {
    const { username } = jwt.verify(token, "mysecretprivatekey");
    req.user = await User.findOne({
      where: {username}
    });
  } catch {
    req.user = null;
  }
  
  next();
};

module.exports = {
  applySession
};