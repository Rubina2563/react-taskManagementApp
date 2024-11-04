import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStoreage } from '../utils/Localstorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({ employees: [], admin: null });
  const [tasks, setTasks] = useState([]); // New state to store tasks

  useEffect(() => {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    if (employeesData) {
      setUserData({ employees: employeesData });
    }
  }, []);

  const addTask = (newTask, assignTo) => {
    const updatedEmployees = userData.employees.map(employee => {
      if (employee.firstname === assignTo) {
        return { ...employee, tasks: [...employee.tasks, newTask] };
      }
      return employee;
    });

    setUserData(prev => ({ ...prev, employees: updatedEmployees }));
    setTasks(prev => [...prev, newTask]);

    // Update local storage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider value={{ userData, tasks, addTask }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
