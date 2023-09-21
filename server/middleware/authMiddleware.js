const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.header("authorization").split(" ")[1];
    const decrytedToken = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decrytedToken.userId;
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
