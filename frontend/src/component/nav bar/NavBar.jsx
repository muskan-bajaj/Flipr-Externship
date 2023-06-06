import React from "react";

export default function NavBar() {
  return (
    <div className="bg-black h-16 flex">
      <div className="text-white font-sil text-2xl py-4 pl-4">
        Employee Management
      </div>
      <div>
        <button>LOGIN</button>
      </div>
    </div>
  );
}
