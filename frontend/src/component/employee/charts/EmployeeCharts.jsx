import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function EmployeeCharts() {
  const [currentDay, setCurrentDay] = useState({
    labels: ["Breaks", "Meetings", "Work"],
    datasets: [],
  });
  const [previousDay, setPreviousDay] = useState({
    labels: ["Breaks", "Meetings", "Work"],
    datasets: [],
  });

  //fetch task for current date
  const makeRequestCurrent = async () => {
    var res;
    try {
      const date = new Date().toDateString().toString();
      res = await axios.post("http://localhost:5000/api/employee/taskByDate", {
        date: date,
        id: localStorage.getItem("id"),
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    const data = res.data.task;
    if (data.length === 0) {
      setCurrentDay({
        labels: ["Breaks", "Meetings", "Work"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ["red", "lightgreen", "yellow"],
            hoverBackgroundColor: ["red", "lightgreen", "yellow"],
          },
        ],
      });
    } else {
      var breaks = 0,
        meeting = 0,
        work = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].type === "break") {
          breaks = breaks + data[i].time;
        } else if (data[i].type === "meeting") {
          meeting = meeting + data[i].time;
        } else if (data[i].type === "work") {
          work = work + data[i].time;
        }
      }
      setCurrentDay({
        labels: ["Breaks", "Meetings", "Work"],
        datasets: [
          {
            data: [breaks, meeting, work],
            backgroundColor: ["red", "lightgreen", "yellow"],
            hoverBackgroundColor: ["red", "lightgreen", "yellow"],
          },
        ],
      });
    }
  };

  //fetch task for previos date
  const makeRequestPrevious = async () => {
    var res;
    try {
      var dateTemp = new Date();
      dateTemp.setDate(dateTemp.getDate() - 1);
      const date = dateTemp.toDateString().toString();
      res = await axios.post("http://localhost:5000/api/employee/taskByDate", {
        date: date,
        id: localStorage.getItem("id"),
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    const data = res.data.task;
    if (data.length === 0) {
      setPreviousDay({
        labels: ["Breaks", "Meetings", "Work"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ["red", "lightgreen", "yellow"],
            hoverBackgroundColor: ["red", "lightgreen", "yellow"],
          },
        ],
      });
    } else {
      var breaks = 0,
        meeting = 0,
        work = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].type === "break") {
          breaks = breaks + data[i].time;
        } else if (data[i].type === "meeting") {
          meeting = meeting + data[i].time;
        } else if (data[i].type === "work") {
          work = work + data[i].time;
        }
      }
      setPreviousDay({
        labels: ["Breaks", "Meetings", "Work"],
        datasets: [
          {
            data: [breaks, meeting, work],
            backgroundColor: ["red", "lightgreen", "yellow"],
            hoverBackgroundColor: ["red", "lightgreen", "yellow"],
          },
        ],
      });
    }
  };

  useEffect(() => {
    makeRequestCurrent();
    makeRequestPrevious();
  }, []);

  return (
    <div className="flex justify-around">
      <div className="w-[40%] p-4">
        <div className="flex justify-center items-center text-lg">
          YESTERDAY
        </div>
        <Pie data={previousDay} />
      </div>
      <div className="w-[40%] p-4">
        <div className="flex justify-center items-center text-lg">TODAY</div>
        <Pie data={currentDay} />
      </div>
    </div>
  );
}
