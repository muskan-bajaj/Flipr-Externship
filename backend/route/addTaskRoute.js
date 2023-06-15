const express = require("express");
const router = express.Router();
const { addTask } = require("../controller/addTaskController");

router.post("/addTask", addTask);
module.exports = router;
