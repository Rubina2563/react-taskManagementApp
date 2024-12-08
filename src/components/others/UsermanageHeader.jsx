import React from "react";

const UserManageHeader = () => {
  return (
    <header className="bg-teal-600 text-gray-100 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav>
          <ul className="flex space-x-6">
            
            <li>
             <a
                href="/"
                className="bg-teal-700 px-4 py-2 rounded-md hover:bg-teal-800 transition"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default UserManageHeader;
