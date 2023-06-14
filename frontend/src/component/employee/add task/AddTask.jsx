import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../employee/datePicker.css";

export default function AddTask() {
  // const [startDate, setStartDate] = useState(new Date());
  const [taskData, setTaskData] = useState({
    description: "",
    type: "",
    startTime: new Date(),
    time: "",
  });

  const onChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (
      name === "description" ||
      name === "type" ||
      name === "startTime" ||
      name === "time"
    ) {
      if (value === "") {
        e.target.style.border = "1px solid #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "1px solid #000000";
      }
    }

    setTaskData({ ...taskData, [name]: value });
  };

  const addNewTask = () => {
    const { description, type, startTime, time } = taskData;
    if (description !== "" && type !== "" && startTime !== "" && time !== "") {
      console.log(taskData);
    } else {
      console.log("fill all fields");
    }
  };

  return (
    <div className="bg-slate-200 h-[89vh] flex justify-center items-center">
      <div className="bg-slate-300 p-5">
        <div className="p-1 flex w-[100%] justify-between">
          <label htmlFor="description">Task Description</label>
          <input
            type="text"
            name="description"
            value={taskData.description}
            onChange={onChange}
            placeholder="Task Description"
          />
        </div>
        <div className="p-1 flex w-[100%] justify-between">
          <label htmlFor="type">Task Type</label>
          <select name="type" value={taskData.type} onChange={onChange}>
            <option hidden>--select task type--</option>
            <option value="break">Break</option>
            <option value="meeting">Meeting</option>
            <option value="work">Work</option>
          </select>
        </div>
        <div className="flex p-1 w-[100%] justify-between">
          <label htmlFor="startTime">Start Time</label>
          <div>
            <DatePicker
              name="startTime"
              selected={taskData.startTime}
              onChange={(date) => setTaskData({ ...taskData, startTime: date })}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
            />
          </div>
        </div>
        <div className="p-1 flex w-[100%] justify-between">
          <label htmlFor="time">Time taken to complete the task</label>
          <input
            type="number"
            name="time"
            value={taskData.time}
            onChange={onChange}
            placeholder="Time in minutes"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black px-4 py-1 rounded text-white"
            onClick={addNewTask}
          >
            Add new task
          </button>
        </div>
      </div>
    </div>
  );
}
