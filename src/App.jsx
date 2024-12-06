import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployDashboard from "./components/Dashboard/EmployDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState("");

  // Function to fetch updated localStorage data
  const loadLocalStorageData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setUser(parsedData.role);
      setLoggedInUserData(parsedData.data);
      console.log("LocalStorage data loaded:", parsedData);
    } else {
      setUser("");
      setLoggedInUserData("");
      console.log("No data in localStorage for logged-in user.");
    }
  };

  useEffect(() => {
    // Initial load of localStorage data
    console.log("Initial load of localStorage data.");
    loadLocalStorageData();

    // Add an event listener for localStorage changes
    const handleStorageChange = () => {
      console.log("Storage event detected. Reloading localStorage data.");
      loadLocalStorageData();
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogin = (email, password) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin"))?.[0] || null;

    console.log("Handling login for email:", email);

    if (admin && email === admin.email && password === admin.password) {
      // Admin login
      console.log("Admin login successful.");
      const adminData = { role: "admin", data: admin };
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      loadLocalStorageData();
    } else {
      // Employee login
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        console.log("Employee login successful:", employee);
        const employeeData = { role: "employee", data: employee };
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
        loadLocalStorageData();
      } else {
        console.log("Invalid login credentials.");
      }
    }
  };

  const handleLogout = () => {
    console.log("User logged out.");
    localStorage.removeItem("loggedInUser");
    loadLocalStorageData();
  };

  return (
    <>
   {/*    <div>
        Debug Info 
        <h3>Debug Info:</h3>
        <p>User Role: {user}</p>
        <p>Logged-in User Data: {JSON.stringify(loggedInUserData, null, 2)}</p>
      </div>*/}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changedUser={handleLogout} data={loggedInUserData} />
      ) : (
        <EmployDashboard changedUser={handleLogout} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
