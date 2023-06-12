import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddNewEmply() {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    designation: "",
  });
  const redirect = useNavigate();

  const onChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "1px solid #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "1px solid #000000";
      }
    }
    if (name === "name") {
      if (value === "") {
        e.target.style.border = "1px solid #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "1px solid #000000";
      }
    }

    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const addEmployee = async () => {
    const { name, email, designation } = employeeDetails;

    if (
      designation !== "" &&
      name !== "" &&
      email !== "" &&
      email.indexOf("@") > -1 &&
      email.indexOf(".") !== -1
    ) {
      const object = {
        name: name,
        email: email,
        designation: designation,
      };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/admin/addEmployee",
          object,
          {
            headers: { Authorization: `${localStorage.getItem("access")}` },
          }
        );
        console.log(res);

        setEmployeeDetails({ name: "", email: "", designation: "" });
        redirect("/admin");
      } catch (err) {
        console.log(err);
        setEmployeeDetails({ name: "", email: "", designation: "" });
      }
    } else {
      console.log("Fill all fields");
    }
  };

  return (
    <div className="bg-slate-200 h-[89vh] flex justify-center items-center">
      <div className="bg-slate-300 p-5 rounded">
        <div>
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            name="name"
            value={employeeDetails.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Employee Email</label>
          <input
            type="email"
            name="email"
            value={employeeDetails.email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <select
            name="designation"
            onChange={onChange}
            value={employeeDetails.designation}
          >
            <option hidden>--select designation--</option>
            <option value="admin">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-black px-3 py-1 text-white rounded-md"
            onClick={addEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
