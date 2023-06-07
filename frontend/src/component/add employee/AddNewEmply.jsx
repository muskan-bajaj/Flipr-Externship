import React from "react";

export default function AddNewEmply() {
  return (
    <div className="bg-slate-200 h-[89vh] flex justify-center items-center">
      <div className="bg-slate-300 p-5 rounded">
        <div>
          <label htmlFor="name">Employee Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Employee Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <select>
            <option hidden>--select designation--</option>
            <option>Manager</option>
            <option>Employee</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-black px-3 py-1 text-white rounded-md"
          >
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
