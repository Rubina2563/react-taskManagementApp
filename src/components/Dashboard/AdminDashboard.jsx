import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
      <div>
      <Header changedUser={props.changedUser } />
          <CreateTask />
          <AllTask/>
    </div>
  )
}

export default AdminDashboard