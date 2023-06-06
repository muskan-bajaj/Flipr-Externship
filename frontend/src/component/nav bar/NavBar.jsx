import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const redirect = useNavigate();
  const login = () => {
    redirect("/login");
  };

  return (
    <div className="bg-black h-16 flex justify-between">
      <div className="text-white font-sil text-xl py-4 pl-4">
        Employee Management
      </div>
      <div className="flex justify-center items-center pr-4">
        <button
          className="text-white hover:border-b-2 border-white"
          onClick={login}
        >
          {props.element}
        </button>
      </div>
    </div>
  );
}
