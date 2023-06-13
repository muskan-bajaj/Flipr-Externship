import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <div>Welcome</div>
      <Link to="/admin/newEmployee">
        <button>Add New Employee</button>
      </Link>
    </div>
  );
}
