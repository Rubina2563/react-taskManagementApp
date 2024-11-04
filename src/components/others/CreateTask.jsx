import React, { useState } from "react";

const CreateTask = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask,setNewTask]=useState({})
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

  // Retrieve the employees array from localStorage
  const data = JSON.parse(localStorage.getItem('employees')) || [];

  // Find the employee and add the task to their tasks array
  data.forEach((employee) => {
    if (assignTo === employee.firstname) {
      // Initialize tasks array if not present
      if (!employee.tasks) employee.tasks = [];
      employee.tasks.push(newTask);
    }
  });

  // Update localStorage with the modified employees array
  localStorage.setItem('employees', JSON.stringify(data));

  // Clear form fields
  setTitle('');
  setAssignTo('');
  setCategory('');
  setDate('');
  setDescription('');
  
  console.log("Task added:", newTask);
};

  return (
    <div className="flex flex-wrap h-auto justify-center items-center rounded mt-7">
      <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-wrap gap-5 bg-slate-600 p-5 border-none rounded-xl w-3/4">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-grow min-w-[300px]">
          <div>
            <h1>Task Title</h1>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              type="text"
              className="w-full border-2 h-[40px] bg-transparent p-2 rounded-md"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h1>Date</h1>
            <input
                value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }}
              type="date"
              className="w-full border-2 h-[40px] bg-transparent p-2 rounded-md"
            />
          </div>

          <div>
            <h1>Assign to</h1>
            <input
                value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value)
              }}
              type="text"
              className="w-full border-2 h-[40px] bg-transparent p-2 rounded-md"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h1>Category</h1>
            <input
                value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              type="text"
              className="w-full border-2 h-[40px] bg-transparent p-2 rounded-md"
              placeholder="Design, Dev etc"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-grow min-w-[300px]">
          <div>
            <h1>Description</h1>
            <textarea
                value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              className="w-full border-2 bg-transparent rounded-xl h-44 p-2"
              placeholder="Describe the task in detail"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="bg-lime-800 text-white px-6 py-3 rounded-2xl">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
