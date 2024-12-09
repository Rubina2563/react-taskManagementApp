import React, { useEffect, useState } from "react";
import AcceptdTask from "./AcceptdTask";
import NewTask from "./NewTask";
import FinishedTask from "./FinishedTask";
import CancelledTask from "./CancelledTask";

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data?.tasks || []);

  // Load tasks from localStorage when the component mounts or localStorage changes
  useEffect(() => {
    const updateTasksFromStorage = () => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const parsedData = JSON.parse(loggedInUser);
        setTasks(parsedData?.data?.tasks || []);
      }
    };

    // Initial load
    updateTasksFromStorage();

    // Listen to storage events
    const handleStorageChange = () => {
      updateTasksFromStorage();
      console.log("from tasklist on updating");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-pink-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {tasks.map((task, id) => {
       const commonStyles = `shadow-md rounded-lg bg-white border transition-all duration-300 ease-in-out sm:p-4 `;


        // Add specific styles for the box shadow
        const shadowStyles = `hover:shadow-xl hover:scale-105`;

        if (task.active) {
          return (
            <div key={id} className={`${commonStyles} border-blue-500 ${shadowStyles}`}>
              <AcceptdTask data={task} employeeData={data} />
            </div>
          );
        }

        if (task.completed) {
          return (
            <div key={id} className={`${commonStyles} border-blue-500 ${shadowStyles}`}>
              <FinishedTask data={task} />
            </div>
          );
        }

        if (task.failed) {
          return (
            <div key={id} className={`${commonStyles} border-blue-500 ${shadowStyles}`}>
              <CancelledTask data={task} />
            </div>
          );
        }

        if (task.newTask) {
          return (
            <div key={id} className={`${commonStyles} border-blue-500 ${shadowStyles}`}>
              <NewTask data={task} employeeData={data} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
