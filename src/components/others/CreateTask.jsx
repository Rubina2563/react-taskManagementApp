import React, { useState } from "react";

const CreateTask = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling visibility

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      date,
      description,
      category,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];
    let isTaskAdded = false;

    data.forEach((employee) => {
      if (assignTo === employee.firstname) {
        if (!employee.tasks) employee.tasks = [];
        employee.tasks.push(newTask);
        isTaskAdded = true;

        // Increment newTask count in taskNumber
        if (employee.taskNumber) {
          employee.taskNumber.newTask += 1;
        } else {
          // If taskNumber doesn't exist, only increment newTask
          employee.taskNumber = {
            newTask: 1,
          };
        }
      }
    });

    if (isTaskAdded) {
      localStorage.setItem("employees", JSON.stringify(data));
      console.log("Task added successfully:", newTask);
      onTaskCreated();
    } else {
      console.log("Employee not found. Task not assigned.");
    }

    // Reset form fields
    setTitle("");
    setAssignTo("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="max-w-4xl mx-auto shadow-[0px_0px_8px_silver] ">
      {/* Create Task Section */}
      <div>
        <div
          className="bg-gray-800 shadow-lg rounded-lg p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="text-xl font-bold text-teal-400">Create a New Task</h2>
          <span className="text-teal-400">
            {isExpanded ? "▲" : "▼"}
          </span>
        </div>
        {isExpanded && (
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
            <form onSubmit={submitHandler} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-gray-300">Task Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">Date</label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">Assign To</label>
                <input
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                  type="text"
                  className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter employee name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">Category</label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter category"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-300">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="4"
                  placeholder="Enter task description"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-teal-600 text-gray-100 px-6 py-3 rounded-md hover:bg-teal-700 transition"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTask;
