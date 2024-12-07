import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployDashboard from "./components/Dashboard/EmployDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/others/AddUser";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState("");

  // Function to fetch updated localStorage data
  const loadLocalStorageData = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      if (parsedData.role !== user || JSON.stringify(parsedData.data) !== JSON.stringify(loggedInUserData)) {
        setUser(parsedData.role);
        setLoggedInUserData(parsedData.data);
      }
    } else {
      setUser("");
      setLoggedInUserData("");
    }
  };

  useEffect(() => {
    // Initial load of localStorage data
    loadLocalStorageData();

    // Listen for storage events to detect changes from other windows
    const handleStorageChange = () => {
      loadLocalStorageData();
    };

    window.addEventListener("storage", handleStorageChange);

    // Set interval to check localStorage every 500ms
    const intervalId = setInterval(() => {
      loadLocalStorageData(); // Update data from localStorage every 500ms
    }, 500);

    // Cleanup the event listener and interval on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId); // Clear the interval to avoid memory leak
    };
  }, [user, loggedInUserData]); // Run this when user or loggedInUserData changes

  const handleLogin = (email, password) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const admin = JSON.parse(localStorage.getItem("admin"))?.[0] || null;

    if (admin && email === admin.email && password === admin.password) {
      const adminData = { role: "admin", data: admin };
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      loadLocalStorageData();
    } else {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
        loadLocalStorageData();
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    loadLocalStorageData();
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          {!user && (
            <>
              <Route path="/" element={<Login handleLogin={handleLogin} />} />
            </>
          )}

          {/* Admin Routes */}
          {user === "admin" && (
            <>
              <Route
                path="/admin"
                element={
                  <AdminDashboard changedUser={handleLogout} data={loggedInUserData} />
                }
              />
              <Route
                path="/add-user"
                element={<AddUser />}
              />
              <Route path="*" element={<Navigate to="/admin" />} />
            </>
          )}

          {/* Employee Routes */}
          {user === "employee" && (
            <>
              <Route
                path="/user"
                element={
                  <EmployDashboard changedUser={handleLogout} data={loggedInUserData} />
                }
              />
              <Route path="*" element={<Navigate to="/user" />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
