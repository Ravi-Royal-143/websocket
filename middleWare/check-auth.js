const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // console.log('inside 1st post middleware')
    const token = req.headers.authorization.split("=")[1];
    // console.log('toke', token)
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { gmail: decodedToken.gmail, username: decodedToken.username, userId: decodedToken.userId };
    // console.log(req)
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
