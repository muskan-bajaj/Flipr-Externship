import React from "react";
import { Link } from "react-router-dom";
import PieChart from "../charts/PieCharts";
import StackedChart from "../charts/StackedChart";

export default function LoginLanding() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-center items-center p-4">
        <Link to="/employee/newTask">
          <button className="bg-black text-white p-2 rounded">
            Add New Task
          </button>
        </Link>
      </div>
      <div>
        <div className="ml-10 font-semibold text-2xl">Task Analysis</div>
        <PieChart />
      </div>
      <div>
        <StackedChart />
      </div>
    </div>
  );
}
