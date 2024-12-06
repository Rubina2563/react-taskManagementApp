import React from "react";

const AcceptedTask = ({ data, assignTo }) => {
  const handleStatusUpdate = (status) => {
    // Retrieve employee data from localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    let isTaskUpdated = false;

    const updatedEmployees = employees.map((employee) => {
      if (employee.firstname === assignTo) {
        // Locate and update the task in the employee's tasks array
        employee.tasks = employee.tasks.map((task) => {
          if (task.title === data.title) {
            isTaskUpdated = true;
            return {
              ...task,
              active: false,
              completed: status === "completed",
              failed: status === "failed",
            };
          }
          return task;
        });

        // Update taskNumber counters
        if (isTaskUpdated) {
          if (!employee.taskNumber) {
            employee.taskNumber = { active: 0, completed: 0, failed: 0, newTask: 0 };
          }
          employee.taskNumber.active = Math.max(employee.taskNumber.active - 1, 0);
          employee.taskNumber[status] += 1;
        }
      }
      return employee;
    });

    if (isTaskUpdated) {
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      console.log(`Task marked as ${status} successfully!`);
    } else {
      console.error("Task not found or not assigned to the correct employee.");
    }
  };

  return (
    <div className="bg-yellow-400 p-4 rounded-lg shadow-md w-full sm:w-[250px] h-auto flex flex-col justify-between max-w-[95%] mx-auto">
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
      <div className="flex flex-wrap justify-between mt-auto space-x-2 gap-y-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-2 rounded-lg transition duration-200 w-full sm:w-auto"
          onClick={() => handleStatusUpdate("completed")}
        >
          Completed
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-2 py-2 rounded-lg transition duration-200 w-full sm:w-auto"
          onClick={() => handleStatusUpdate("failed")}
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptedTask;
