const express = require("express");
const router = express.Router();
const { addEmployee } = require("../../controller/admin/addEmployeeController");
// const { validate } = require("../../middleware/validator");

// router.use(validate);
router.post("/addEmployee", addEmployee);

module.exports = router;