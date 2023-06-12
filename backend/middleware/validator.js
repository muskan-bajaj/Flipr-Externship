const jwt = require("jsonwebtoken");

function validate(req, res, next) {
  console.log("token is ", req.headers);
  if (!req) next();
  jwt.verify(req.headers.authorization, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      console.log("verification failed");
      return res.status(403).json({ error: "authentication failed" });
    }
    console.log(user);
    next();
  });
}

module.exports = { validate };
