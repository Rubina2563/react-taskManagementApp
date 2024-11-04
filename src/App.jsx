import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStoreage } from './utils/Localstorage'
import { AuthContext} from './context/AuthProvider'
import { data } from 'autoprefixer'
const App = () => {

  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState("");
  const authdata = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
    }
  ,[authdata])
 useEffect(() => {
  console.log(authdata);
}, [authdata]);
  
const handleLogin = (email, password) => {
  if (email === "rubinatazak@gmail.com" && password === "123") {
    setUser("admin");
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  } else if (authdata && authdata.userData && authdata.userData.employees) {
    const employee = authdata.userData.employees.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
    } else {
      console.log("invalid credentials");
    }
  } else {
    console.log("invalid credentials or authdata not loaded yet");
  }
};



  
 
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""};
      {user == "admin" ? <AdminDashboard changedUser={setUser} /> : <EmployDashboard changedUser={setUser} data={loggedInUserData} />}
      {/*<Login />*/}
      {/* <EmployDashboard/>*/}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App