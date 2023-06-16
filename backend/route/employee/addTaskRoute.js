const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTaskByDate,
  addTask,
} = require("../../controller/employee/taskController");

router.post("/allTask", getAllTask);
router.post("/taskByDate", getTaskByDate);
router.post("/addTask", addTask);
module.exports = router;
