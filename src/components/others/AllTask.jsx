import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-teal-400 mb-4">All Tasks</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-teal-600 text-gray-100">
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">New Task</th>
              <th className="px-4 py-2">Active</th>
              <th className="px-4 py-2">Completed</th>
              <th className="px-4 py-2">Failed</th>
            </tr>
          </thead>
          <tbody>
            {authData?.userData.employees?.map((employee, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                } border-b border-gray-700`}
              >
                <td className="px-4 py-2 text-gray-200">{employee.firstname}</td>
                <td className="px-4 py-2 text-center text-gray-200">{employee.taskNumber.newTask}</td>
                <td className="px-4 py-2 text-center text-gray-200">{employee.taskNumber.active}</td>
                <td className="px-4 py-2 text-center text-gray-200">{employee.taskNumber.completed}</td>
                <td className="px-4 py-2 text-center text-gray-200">{employee.taskNumber.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
