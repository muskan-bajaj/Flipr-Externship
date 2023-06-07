import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const authCxt = useContext(AuthContext);
  const redirect = useNavigate();

  const logout = () => {
    authCxt.setLoggedIn(false);
  };

  return (
    <div className="bg-black h-16 flex justify-between">
      <div className="text-white font-sil text-xl py-4 pl-4">
        Employee Management
      </div>
      <div className="flex justify-center items-center pr-4">
        {!authCxt.loggedIn ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="text-white hover:border-b-2 border-white">
              Login
            </button>
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="text-white hover:border-b-2 border-white"
              onClick={logout}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
