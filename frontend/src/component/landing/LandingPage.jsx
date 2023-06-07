import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>Welcome to our Employee Management System</div>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
