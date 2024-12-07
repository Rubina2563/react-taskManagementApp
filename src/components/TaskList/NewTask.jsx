import React, { useState } from "react";
import AcceptedTask from "./AcceptdTask";
const NewTask = ({ data, employeeData }) => {
  const [isAccepted, setIsAccepted] = useState(false); // Tracks whether the task has been accepted.

  const handleAcceptTask = () => {
    // Retrieve current employees data from localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    let isTaskUpdated = false;

    // Update the relevant employee's tasks and task counters
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstname === employeeData.firstname) {
        // Update the tasks array
        employee.tasks = employee.tasks.map((task) => {
          if (task.title === data.title) {
            isTaskUpdated = true;
            return {
              ...task,
              newTask: false, // Mark as no longer a "new task"
              active: true,   // Mark as "active"
            };
          }
          return task;
        });

        // Update task number counters
        if (isTaskUpdated) {
          if (!employee.taskNumber) {
            employee.taskNumber = { active: 0, completed: 0, failed: 0, newTask: 0 };
          }
          employee.taskNumber.newTask = Math.max(employee.taskNumber.newTask - 1, 0);
          employee.taskNumber.active += 1;
        }
      }
      return employee;
    });

    if (isTaskUpdated) {
      // Save the updated employees data back to localStorage
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setIsAccepted(true); // Transform the component to AcceptedTask
    } else {
      console.error("Task not found or not assigned to the correct employee.");
    }
  };

  // If the task has been accepted, render the AcceptedTask component
  if (isAccepted) {
    return <AcceptedTask data={data} employeeData={employeeData} />;
  }

  // Default NewTask component rendering
  return (
    <div className="bg-blue-400 p-4 rounded-lg shadow-md w-full sm:w-[250px] h-auto flex flex-col justify-between max-w-[95%] mx-auto">
      {/* Task Header */}
      <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
        <h5 className="text-white bg-red-500 px-2 py-1 rounded-lg text-sm font-medium truncate max-w-[60%]">
          {data.category}
        </h5>
        <span className="text-xs text-gray-700 whitespace-nowrap">{data.date}</span>
      </div>

      {/* Task Title */}
      <h1 className="text-lg font-semibold mb-2 text-gray-800 break-words text-center">
        {data.title}
      </h1>

      {/* Task Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4 break-words">
        {data.description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center mt-auto space-x-2 gap-y-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded-lg transition duration-200"
          onClick={handleAcceptTask}
        >
          Accepted
        </button>
      </div>
    </div>
  );
};

export default NewTask;
