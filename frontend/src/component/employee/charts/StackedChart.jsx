import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function StackedChart() {
  //variables
  const [stackedData, setStackedData] = useState({
    labels: [],
    datasets: [],
  });
  var dateArray = [];
  var breakArray = [];
  var meetingArray = [];
  var workArray = [];

  const makeRequest = async () => {
    //find dates in the week
    for (var m = 0; m < 7; m++) {
      var temp = new Date();
      temp.setDate(temp.getDate() - m);
      dateArray.push(temp.toDateString().toString());
    }
    console.log(dateArray);

    var res;
    var data = [];
    try {
      for (var j = 0; j < 7; j++) {
        res = await axios.post(
          "http://localhost:5000/api/employee/taskByDate",
          {
            date: dateArray[j],
            id: localStorage.getItem("id"),
          }
        );
        data.push(res.data.task);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(data);

    for (var k = 0; k < 7; k++) {
      if (data[k].length === 0) {
        breakArray.push(0);
        meetingArray.push(0);
        workArray.push(0);
      } else {
        var breaks = 0,
          meeting = 0,
          work = 0;
        for (var i = 0; i < data[k].length; i++) {
          if (data[k][i].type === "break") {
            breaks = breaks + data[k][i].time;
          } else if (data[k][i].type === "meeting") {
            meeting = meeting + data[k][i].time;
          } else if (data[k][i].type === "work") {
            work = work + data[k][i].time;
          }
          breakArray.push(breaks);
          meetingArray.push(meeting);
          workArray.push(work);
        }
      }
    }

    setStackedData({
      labels: dateArray,
      datasets: [
        {
          label: "Not Working",
          data: breakArray,
          backgroundColor: "#FF6384",
        },
        {
          label: "Working",
          data: workArray,
          backgroundColor: "#36A2EB",
        },
        {
          label: "Meeting",
          data: meetingArray,
          backgroundColor: "#FFCE56",
        },
      ],
    });
  };

  useEffect(() => {
    makeRequest();
  }, []);

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <div>blaaaaaaaaaaaaaaajjjjjjjjjj</div>
      <Bar data={stackedData} options={options} />
    </div>
  );
}
