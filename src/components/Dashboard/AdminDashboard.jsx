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
      <Header
        changedUser={props.changedUser}
        data={props.data}
        updateEmployees={updateEmployees}
      />
     
      <div className=" mx-auto px-8 space-y-5">
         <AddUser updateEmployees={updateEmployees} />
        <CreateTask onTaskCreated={updateEmployees} />
        <AllTask employees={employees} />
      </div>
    </div>
  );
};

export default AdminDashboard;
