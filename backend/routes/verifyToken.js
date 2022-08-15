const JWT = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied!");
  try {
    const verified = JWT.verify(token, process.env.JWT_SEC);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("invalid token");
  }
};

module.exports = {
  verifyToken,
};
