import React from "react";

const ResolveTask = ({ task, onResolveTaskRemove }) => {
  return (
    <div className="bg-green-100 p-4 rounded-md my-2">
      <p className="font-bold text-xl">{task.title}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-green-600 font-bold">✔ Completed</p>
        <p
          onClick={() => {
            onResolveTaskRemove(task);
          }}
          className="cursor-pointer text-sm text-gray-500"
        >
          Click to remove
        </p>
      </div>
    </div>
  );
};

export default ResolveTask;
