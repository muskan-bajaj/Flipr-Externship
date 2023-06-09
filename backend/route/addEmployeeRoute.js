const express = require("express");
const router = express.Router();
const { addEmployee } = require("../controller/addEmployeeController");

router.post("/addEmployee", addEmployee);

module.exports = router;
