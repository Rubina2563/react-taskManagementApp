import React, { useEffect, useState } from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployDashboard = (props) => {
   const [data, setData] = useState(props.data); // Maintain a local state for data

  const updateDataFromStorage = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setData(parsedData.data); // Update local state with the new data
    }
  };

  // Update data when localStorage changes in the same tab
  useEffect(() => {
    const interval = setInterval(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      const parsedData = JSON.parse(loggedInUser);
      if (JSON.stringify(data) !== JSON.stringify(parsedData?.data)) {
        console.log("Data updated from localStorage in the same tab");
        setData(parsedData?.data);
      }
    }, 500); // Poll every 500ms

    return () => {
      clearInterval(interval); // Cleanup on component unmount
    };
  }, [data]);

  // Listen for storage events for cross-tab updates
  useEffect(() => {
    const handleStorageChange = () => {
      updateDataFromStorage();
      console.log("Data updated from storage event");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header changedUser={props.changedUser} data={props.data} />
      <div className="flex flex-col items-center justify-center p-5 gap-5">
        <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-4 flex flex-wrap gap-4 justify-evenly">
          <TaskListNumber data={props.data} />
        </div>
        <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Overview
          </h2>
          <TaskList data={props.data} reloadData={props.reloadData} />
        </div>
      </div>
    </div>
  );
};

export default EmployDashboard;
