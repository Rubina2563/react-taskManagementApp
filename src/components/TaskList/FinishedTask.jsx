import React from 'react';

const FinishedTask = ({ data }) => {
  return (
    <div className="bg-green-500 p-4 rounded-lg shadow-md w-full sm:w-[250px] h-auto flex flex-col justify-between max-w-[95%] mx-auto">
      {/* Task Header */}
      <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
        <h5 className="text-white bg-red-500 px-2 py-1 rounded-lg text-sm font-medium truncate max-w-[60%]">
          {data.category}
        </h5>
        <span className="text-xs text-gray-700 whitespace-nowrap">{data.date}</span>
      </div>

      {/* Task Title */}
      <h1 className="text-lg font-semibold mb-2 text-gray-800 break-words text-center">
        {data.title}
      </h1>

      {/* Task Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4 break-words">
        {data.description}
      </p>

      {/* Action Buttons */}
         <div className="flex flex-wrap justify-center mt-auto space-x-2 gap-y-2">
        <p className="bg-green-700 text-white text-sm px-3 py-2 rounded-lg">
          Status: Task Completed
        </p>
        <p className="text-xs text-gray-200">
          The task has been completed successfully on {data.date}. 
          All necessary steps have been carried out, and the task is now marked as finished.
        </p>
      </div>
    </div>
  );
};

export default FinishedTask;
