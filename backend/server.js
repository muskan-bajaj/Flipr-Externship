require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./route/userRoute");
const addEmployee = require("./route/addEmployeeRoute");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );

  next();
});

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
app.use("/api/admin", addEmployee);
