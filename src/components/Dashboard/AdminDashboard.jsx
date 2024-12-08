import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import AddUser from "../others/AddUser";
const AdminDashboard = (props) => {
  
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );

  const updateEmployees = () => {
    const updatedData = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(updatedData);
  };

  return (
    <div className="bg-gray-600 min-h-screen text-gray-100">
      <Header changedUser={props.changedUser} data={props.data} updateEmployees={updateEmployees} />
<AddUser/>
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <CreateTask onTaskCreated={updateEmployees} />
        <AllTask employees={employees} />
      </div>
    </div>
  );
};

export default AdminDashboard;
