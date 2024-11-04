import React, { useContext } from 'react'
import { AuthContext} from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext);
    return (<>
       <div className='bg-yellow-400 flex m-2 justify-between p-3 '>
              <h2>Employee Name</h2>
              <h2>New Task</h2>
            <h2>Active</h2>
            <h2>Completed</h2>
            <h2>Failed</h2>
          </div>
      <div className='m-3 h-48 overflow-auto'>
          
         { authData?.userData.employees?.map(function(elem,idx){
             return <div key={idx } className='flex m-2 border border-gray-50 rounded-md  justify-between p-3 '>
                  <h1 >{elem.firstname }</h1>
                  <h2>{elem.taskNumber.newTask}</h2>
            <h2>{elem.taskNumber.active}</h2>
            <h2>{elem.taskNumber.completed}</h2>
            <h2>{elem.taskNumber.failed}</h2>
          </div>
          })}
          

          
         
        </div>
        </>
  )
}

export default AllTask