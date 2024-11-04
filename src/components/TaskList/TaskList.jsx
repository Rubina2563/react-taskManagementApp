import React from 'react';
import AcceptdTask from './AcceptdTask';
import NewTask from './NewTask';
import FinishedTask from './FinishedTask';
import CancelledTask from './CancelledTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="bg-red-500 h-1/3 overflow-x-auto flex gap-5 p-3 w-full px-5 flex-nowrap"
    >
      {data?.tasks?.map((elem, id) => {
        if (elem.active) {
          return <AcceptdTask key={id} data={elem} />;
        }
        if (elem.completed) {
          return <FinishedTask key={id} data={elem}/>;
        }
        if (elem.failed) {
          return <CancelledTask key={id} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask key={id} data={elem}/>;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
