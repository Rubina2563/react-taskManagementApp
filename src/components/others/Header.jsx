import React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate(); // Initialize navigate
  const handleLogout = () => {
    props.changedUser(); // Log out functionality
   navigate("/");};

 

  const handleAddUser = () => {
    navigate("/add-user"); // Redirect to the "Add New User" page
  };
console.log(props)
  const isAdmin = props.data?.id === "admin001"; // Check if the role is admin

  return (
    <div className="bg-gray-800 text-gray-100 shadow-lg rounded-xl flex justify-between p-4 items-center">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome,
          <br />
          <span className="text-lg font-bold text-teal-400">
            {props.data?.firstname || "Admin"}
          </span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            onClick={handleAddUser}
          >
            Add New User
          </button>
        )}
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
