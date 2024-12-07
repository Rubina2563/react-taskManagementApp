import React from 'react';

const TaskListNumber = ({ data }) => {
  const taskNumber = data?.taskNumber || { active: 0, completed: 0, failed: 0, newTask: 0 };

  const stats = [
    { label: 'New Tasks', value: taskNumber.newTask, color: 'bg-blue-400' },
    { label: 'Active Tasks', value: taskNumber.active, color: 'bg-yellow-400' },
    { label: 'Completed Tasks', value: taskNumber.completed, color: 'bg-green-400' },
    { label: 'Failed Tasks', value: taskNumber.failed, color: 'bg-red-400' },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Task Stats */}
      <div className="flex flex-wrap gap-3 justify-center">
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

      {/* Enhanced Admin Review Notification */}
      <div
        className="mt-4 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md shadow-lg animate-slide"
      >
        Task numbers will update after review from the admin.
      </div>

      {/* Keyframes for left-right motion */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-5px);
            }
            50% {
              transform: translateX(5px);
            }
            100% {
              transform: translateX(-5px);
            }
          }

          .animate-slide {
            animation: slide 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default TaskListNumber;
