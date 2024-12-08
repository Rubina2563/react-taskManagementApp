import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployDashboard from "./components/Dashboard/EmployDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AddUser from "./components/others/AddUser";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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

  // Function to update employees
  const updateEmployees = () => {
    const updatedData = JSON.parse(localStorage.getItem("employees")) || [];
    console.log("Employees updated:", updatedData);
  };

  useEffect(() => {
    loadLocalStorageData();

    const handleStorageChange = () => {
      loadLocalStorageData();
    };

    window.addEventListener("storage", handleStorageChange);

    const intervalId = setInterval(() => {
      loadLocalStorageData();
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(intervalId);
    };
  }, [user, loggedInUserData]);

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
    <Router>
      <Routes>
        {/* Public Routes */}
        {!user && <Route path="/" element={<Login handleLogin={handleLogin} />} />}

        {/* Admin Routes */}
        {user === "admin" && (
          <>
            <Route
              path="/admin"
              element={
                <AdminDashboard
                  changedUser={handleLogout}
                  data={loggedInUserData}
                  updateEmployees={updateEmployees}
                />
              }
            />
            <Route
              path="/add-user"
              element={<AddUser updateEmployees={updateEmployees} />}
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
                <EmployDashboard
                  changedUser={handleLogout}
                  data={loggedInUserData}
                />
              }
            />
            <Route path="*" element={<Navigate to="/user" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
