import React from 'react';

const TaskListNumber = ({ data }) => {
  // Add default values if data or taskNumber is undefined
  const taskNumber = data?.taskNumber || { active: 0, completed: 0, failed: 0, newTask: 0 };

  return (
    <div className="bg-amber-400 flex gap-3 w-full h-[30%] p-2">
      <div className="bg-orange-500 h-full w-1/3 p-2">
        <div>New Task Number: {taskNumber.newTask}</div>
      </div>
      <div className="bg-orange-500 h-full w-1/3 p-2">
        <div>Active Task: {taskNumber.active}</div>
      </div>
      <div className="bg-orange-500 h-full w-1/3 p-2">
        <div>Completed Task: {taskNumber.completed}</div>
      </div>
      <div className="bg-orange-500 h-full w-1/3 p-2">
        <div>Failed Task: {taskNumber.failed}</div>
      </div>
    </div>
  );
};

export default TaskListNumber;
