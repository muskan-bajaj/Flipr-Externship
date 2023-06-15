const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  employee: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
