import React from "react";

const Ticket = ({ ticket, onClickedCard }) => {
  const isoDate = ticket.createdAt;
  const date = new Date(isoDate);
  const formattedDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  return (
    <div
      className="bg-white p-4 rounded-md cursor-pointer"
      onClick={() => {
        onClickedCard(ticket);
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">{ticket.title}</h2>
        <p
          className={`flex items-center gap-2 py-2 px-3 rounded-full ${
            ticket.status === "Open" && "bg-green-100"
          } ${ticket.status === "In-Progress" && "bg-yellow-100"} `}
        >
          <span
            className={`w-3 h-3 rounded-full block ${
              ticket.status === "Open" && "bg-green-600"
            } ${ticket.status === "In-Progress" && "bg-yellow-500"}`}
          ></span>
          {ticket.status}
        </p>
      </div>
      <div className="my-3 text-gray-500">
        <p>{ticket.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <p className="text-gray-500">
            #<span>{ticket.id}</span>
          </p>
          <p
            className={`uppercase ${
              ticket.priority === "High"
                ? "text-red-600"
                : ticket.priority === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            <span>{ticket.priority}</span> Priority
          </p>
        </div>
        <div className="flex gap-4 text-gray-500">
          <p>👤 {ticket.customer}</p>
          <p>
            <span className="mr-2">📆</span>
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
