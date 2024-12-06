import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header changedUser={props.changedUser} data={props.data} />
      <div className="flex flex-col items-center justify-center p-5 gap-5">
        {/* Task Summary Section */}
        <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-4 flex flex-wrap gap-4 justify-evenly">
          <TaskListNumber data={props.data} />
        </div>

        {/* Task Details Section */}
        <div className="w-full max-w-5xl bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Task Overview
          </h2>
          <TaskList data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default EmployDashboard;
