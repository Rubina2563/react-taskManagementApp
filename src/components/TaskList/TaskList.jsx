import React from 'react';
import AcceptdTask from './AcceptdTask';
import NewTask from './NewTask';
import FinishedTask from './FinishedTask';
import CancelledTask from './CancelledTask';

const TaskList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data?.tasks?.map((task, id) => {
        const commonStyles = `p-4 shadow-md rounded-lg bg-white border hover:shadow-lg transition-shadow duration-300 ease-in-out`;

        if (task.active) {
          return (
            <div key={id} className={`${commonStyles} border-blue-500`}>
              <AcceptdTask data={task} />
            </div>
          );
        }

        if (task.completed) {
          return (
            <div key={id} className={`${commonStyles} border-green-500`}>
              <FinishedTask data={task} />
            </div>
          );
        }

        if (task.failed) {
          return (
            <div key={id} className={`${commonStyles} border-red-500`}>
              <CancelledTask data={task} />
            </div>
          );
        }

        if (task.newTask) {
          return (
            <div key={id} className={`${commonStyles} border-yellow-500`}>
              <NewTask data={task} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
