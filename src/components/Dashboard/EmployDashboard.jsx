import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployDashboard = (props) => {
  
    return (
  <div className='flex items-center h-screen justify-center p-5 '>
      <div className='w-screen h-auto  bg-slate-700 border-none rounded-xl'>
          <Header changedUser={props.changedUser }  data={props.data} />
                <TaskListNumber data={props.data} />
                <TaskList data={props.data} />
    </div></div>
  )
}

export default EmployDashboard