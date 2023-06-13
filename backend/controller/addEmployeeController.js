require("dotenv").config();
const passGenerator = require("generate-password");
const bcrypt = require("bcrypt");
const User = require("../model/userSchema");

const addEmployee = async (req, res) => {
  const { name, email, designation } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    console.log("Employee already exists");
    return res.status(400).json({ error: "Employee already exists" });
  }

  if (email.includes("@")) {
    try {
      const password = passGenerator.generate({
        length: 10,
        numbers: true,
        symbols: true,
      });
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      console.log(password);
      console.log("Password set");

      const data = new User({
        name: name,
        email: email,
        designation: designation,
        password: hashedPassword,
      });

      await data.save();
      console.log("Employee Added");

      return res.status(200).json({ id: data._id, email: email });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  } else {
    res.status(400).json({ error: "invalid details entered" });
  }
};

module.exports = { addEmployee };
