import React from "react";
import { Link } from "react-router-dom";

export default function LoginLanding() {
  return (
    <div>
      <div>Welcome</div>
      <Link to="/employee/newTask">
        <button>Add New Task</button>
      </Link>
    </div>
  );
}