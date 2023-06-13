import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./component/context/AuthContext";
import Login from "./component/login/Login";
import LoginLandingAdmin from "./component/admin/login landing/LoginLanding";
import LoginLandingEmployee from "./component/employee/LoginLanding/LoginLanding";
import NavBar from "./component/nav bar/NavBar";
import LandingPage from "./component/landing/LandingPage";
import AddNewEmply from "./component/admin/add employee/AddNewEmply";
import Error from "./component/error/Error";
import AddTask from "./component/employee/add task/AddTask";
// import NavBar from "./component/nav bar/NavBar";

function App() {
  const authCxt = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}
        {authCxt.loggedIn && authCxt.designation === "admin" && (
          <Route path="/admin" element={<LoginLandingAdmin />} />
        )}
        {authCxt.loggedIn && authCxt.designation === "admin" && (
          <Route path="/admin/newEmployee" element={<AddNewEmply />} />
        )}

        {/* employee */}
        {authCxt.loggedIn && authCxt.designation === "employee" && (
          <Route path="/employee" element={<LoginLandingEmployee />} />
        )}
        {authCxt.loggedIn && authCxt.designation === "employee" && (
          <Route path="/employee/newTask" element={<AddTask />} />
        )}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
