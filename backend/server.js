require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./route/userRoute");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening to port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use("/api/user", userRoute);
