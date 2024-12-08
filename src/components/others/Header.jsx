import React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.changedUser();
    navigate("/");
  };

  const handleAddUser = () => {
    navigate("/add-user"); // Redirect to Add User page
  };

  const isAdmin = props.data?.id === "admin001";

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
        {/* {isAdmin && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            onClick={handleAddUser}
          >
            Add New User
          </button>
        )} */}
<button
  className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-6 rounded-md shadow-[0px_0px_8px_silver] hover:shadow-[0px_0px_12px_silver] transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
  onClick={handleLogout}
>
  Log Out
</button>


      </div>
    </div>
  );
};

export default Header;
