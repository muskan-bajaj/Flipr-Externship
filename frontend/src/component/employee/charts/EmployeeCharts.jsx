import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function EmployeeCharts() {
  const [currentDay, setCurrentDay] = useState();
  const [previousDay, setPreviousDay] = useState();

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
  };

  useEffect(() => {
    makeRequestCurrent();
    makeRequestPrevious();
  }, []);

  return (
    <div>
      <div>
        <div>TODAY</div>
        <Pie data={currentDay} />
      </div>
      <div>
        <div>YESTERDAY</div>
        <Pie data={previousDay} />
      </div>
    </div>
  );
}
