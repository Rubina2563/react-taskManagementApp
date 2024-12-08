import React, { useState } from "react";
//import UserManageHeader from "./UsermanageHeader";

const AddUser = ({ updateEmployees }) => {
  // States for visibility of sections
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);

  // States for adding a user
  const [addFirstName, setAddFirstName] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addPassword, setAddPassword] = useState("");

  // States for deleting a user
  const [deleteEmail, setDeleteEmail] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  const generateUserId = () => {
    return `emp${Date.now()}`;
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: generateUserId(),
      firstname: addFirstName,
      email: addEmail,
      password: addPassword,
      tasks: [],
      taskNumber: {
        active: 0,
        completed: 0,
        failed: 0,
        newTask: 0,
      },
    };

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newUser);
    localStorage.setItem("employees", JSON.stringify(employees));

    console.log("User added successfully:", newUser);
    updateEmployees();
    setAddFirstName("");
    setAddEmail("");
    setAddPassword("");
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    const initialCount = employees.length;

    employees = employees.filter(
      (employee) =>
        !(employee.email === deleteEmail && employee.password === deletePassword)
    );

    if (employees.length < initialCount) {
      localStorage.setItem("employees", JSON.stringify(employees));
      console.log("User removed successfully");
      updateEmployees();
    } else {
      console.log("User not found");
    }
    setDeleteEmail("");
    setDeletePassword("");
  };

  return (
   
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Add User Section */}
        <div>
          <div
            className="bg-gray-800 shadow-lg rounded-lg p-4 flex justify-between items-center cursor-pointer"
            onClick={() => setIsAddUserOpen(!isAddUserOpen)}
          >
            <h2 className="text-xl font-bold text-teal-400">Add User</h2>
            <span className="text-teal-400">
              {isAddUserOpen ? "▲" : "▼"}
            </span>
          </div>
          {isAddUserOpen && (
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
              <form onSubmit={handleAddUser} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={addFirstName}
                    onChange={(e) => setAddFirstName(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    value={addEmail}
                    onChange={(e) => setAddEmail(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    value={addPassword}
                    onChange={(e) => setAddPassword(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-teal-600 text-gray-100 px-6 py-3 rounded-md hover:bg-teal-700 transition"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Delete User Section */}
        <div>
          <div
            className="bg-gray-800 shadow-lg rounded-lg p-4 flex justify-between items-center cursor-pointer"
            onClick={() => setIsDeleteUserOpen(!isDeleteUserOpen)}
          >
            <h2 className="text-xl font-bold text-red-400">Delete User</h2>
            <span className="text-red-400">
              {isDeleteUserOpen ? "▲" : "▼"}
            </span>
          </div>
          {isDeleteUserOpen && (
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 mt-4">
              <form onSubmit={handleDeleteUser} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    value={deleteEmail}
                    onChange={(e) => setDeleteEmail(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    className="w-full bg-gray-700 text-gray-200 border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-red-600 text-gray-100 px-6 py-3 rounded-md hover:bg-red-700 transition"
                  >
                    Delete User
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default AddUser;
