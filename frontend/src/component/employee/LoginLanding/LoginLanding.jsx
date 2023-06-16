import React from "react";
import { Link } from "react-router-dom";
import EmployeeCharts from "../charts/EmployeeCharts";

export default function LoginLanding() {
  return (
    <>
      <div>
        <div>Welcome</div>
        <Link to="/employee/newTask">
          <button>Add New Task</button>
        </Link>
      </div>
      <div>
        <EmployeeCharts />
      </div>
    </>
  );
}
