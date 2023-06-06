import React, { useContext } from "react";
import Login from "./component/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./component/welcome page/Welcome";
import NavBar from "./component/nav bar/NavBar";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      {isLoggedIn ? <NavBar /> : <></>}
      <Routes>
        {isLoggedIn ? <Route path="/admin" element={<Welcome />} /> : <></>}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
