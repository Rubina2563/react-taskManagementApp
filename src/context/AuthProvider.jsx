import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStoreage } from "../utils/Localstorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({ employees: [], admin: null });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Ensure initial local storage data setup
    setLocalStoreage();
    const { employees, admin } = getLocalStorage();

    const parsedEmployees = employees ? JSON.parse(employees) : [];
    const parsedAdmin = admin ? JSON.parse(admin)[0] : null;

    // Extract and set tasks from employees
    const allTasks = parsedEmployees.reduce((acc, emp) => acc.concat(emp.tasks || []), []);

    setUserData({
      employees: parsedEmployees,
      admin: parsedAdmin,
    });
    setTasks(allTasks);
  }, []);

  const addTask = (newTask, assignTo) => {
    // Find and update the assigned employee's task list
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.firstname === assignTo) {
        const updatedTasks = [...(employee.tasks || []), newTask];
        return { ...employee, tasks: updatedTasks };
      }
      return employee;
    });

    // Update userData and tasks states
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }));
    setTasks((prev) => [...prev, newTask]);

    // Update local storage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    const updatedTasks = tasks.concat(newTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <AuthContext.Provider value={{ userData, tasks, addTask }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
