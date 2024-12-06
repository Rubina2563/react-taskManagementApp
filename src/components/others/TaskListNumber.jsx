import React from 'react';

const TaskListNumber = ({ data }) => {
  const taskNumber = data?.taskNumber || { active: 0, completed: 0, failed: 0, newTask: 0 };

  const stats = [
    { label: 'New Tasks', value: taskNumber.newTask, color: 'bg-blue-400' },
    { label: 'Active Tasks', value: taskNumber.active, color: 'bg-yellow-400' },
    { label: 'Completed Tasks', value: taskNumber.completed, color: 'bg-green-400' },
    { label: 'Failed Tasks', value: taskNumber.failed, color: 'bg-red-400' },
  ];
  console.log("tasklist number:",data)

  return (
    <div className="flex w-full flex-wrap gap-3 justify-center">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center justify-center w-32 h-20 rounded-md shadow-sm ${stat.color} text-white`}
        >
          <div className="text-lg font-semibold">{stat.value}</div>
          <div className="text-xs">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
