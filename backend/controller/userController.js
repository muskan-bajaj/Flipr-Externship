const userSchema = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const createToken = (element) => {
  return jwt.sign({ element }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.login(email, password);
    const jwtToken = createToken(user.designation);
    const id = user._id;
    res.status(200).json({
      success: true,
      user: email,
      designation: jwtToken,
      id: id,
    });
    // res.status(200).json({ email, jwtToken, id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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

module.exports = { login };
