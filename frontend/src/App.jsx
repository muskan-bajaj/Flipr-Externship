import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./component/context/AuthContext";
import Login from "./component/login/Login";
import Welcome from "./component/welcome page/Welcome";
import NavBar from "./component/nav bar/NavBar";
import LandingPage from "./component/landing/LandingPage";
import AddNewEmply from "./component/add employee/AddNewEmply";
import Error from "./component/error/Error";
// import NavBar from "./component/nav bar/NavBar";

function App() {
  const authCxt = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {authCxt.loggedIn && <Route path="/admin" element={<Welcome />} />}
        {authCxt.loggedIn && authCxt.designation == "admin" && (
          <Route path="/admin/newEmployee" element={<AddNewEmply />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
