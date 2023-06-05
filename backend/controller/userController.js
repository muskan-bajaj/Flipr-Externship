const userSchema = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.signUp(email, password);

    const jwtToken = createToken(user._id);

    res.status(200).json({ email, jwtToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signup };