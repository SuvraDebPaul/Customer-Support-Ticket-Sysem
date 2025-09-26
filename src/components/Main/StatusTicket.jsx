import React from "react";

const StatusTicket = ({ taskTicket, onResoveClick }) => {
  return (
    <div className="bg-white p-4 rounded-md my-2">
      <h3 className="text-xl font-bold">{taskTicket.title}</h3>
      <button
        onClick={() => {
          onResoveClick(taskTicket);
        }}
        className="btn btn-block mt-4 green-gradient text-white font-semibold text-xl rounded-md"
      >
        Complete
      </button>
    </div>
  );
};

export default StatusTicket;
