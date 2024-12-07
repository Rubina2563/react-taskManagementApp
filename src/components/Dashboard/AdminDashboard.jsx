import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "../others/AddUser";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="bg-gray-600 min-h-screen text-gray-100">
      <Header changedUser={props.changedUser} data={props.data} />
     
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
