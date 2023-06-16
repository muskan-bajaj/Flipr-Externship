const User = require("../../model/userSchema");
const Task = require("../../model/taskSchema");

const getAllTask = async (req, res) => {
  const { id } = req.body;
  const userTask = await Task.find({ employee: id });
  if (userTask) {
    return res.status(200).json({ task: userTask });
  }
  console.log("no task found");
  return res.status(400).json({ msg: "no task" });
};

const getTaskByDate = async (req, res) => {
  const { id, date } = req.body;
  try {
    const userTask = await Task.find({
      $and: [{ startTime: { $regex: `^${date}` } }, { employee: id }],
    });
    return res.status(200).json({ task: userTask });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const addTask = async (req, res) => {
  const { description, type, startTime, time, employee } = req.body;
  const user = await User.findOne({ _id: employee });

  if (!user) {
    console.log("Employee doesn't exists");
    return res.status(400).json({ error: "Employee doesn't exists" });
  }
  try {
    const data = new Task({
      description: description,
      type: type,
      startTime: startTime,
      time: time,
      employee: employee,
    });

    await data.save();
    console.log("Task Added");

    return res.status(200).json({ employee: employee, msg: "Task added" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};

module.exports = { addTask, getAllTask, getTaskByDate };
