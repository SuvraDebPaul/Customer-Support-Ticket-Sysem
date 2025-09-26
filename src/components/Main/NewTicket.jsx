import React, { useState } from "react";

const NewTicket = ({ onNewTicket, handelNewTicket, allTickets }) => {
  const [ticketName, setTicketName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submission");
    if (!ticketName && !priority && !userName && !description) {
      alert("Please Fill Up All the Required Fields");
      return;
    }
    const lastId =
      allTickets.length > 0 ? allTickets[allTickets.length - 1].id : 1000;
    const createdAt = new Date();
    const newTicket = {
      id: lastId + 1,
      title: ticketName,
      description: description,
      customer: userName,
      priority: priority,
      status: "Open",
      createdAt: createdAt.toISOString(),
    };
    handelNewTicket(newTicket);
    setTicketName("");
    setPriority("Low");
    setUserName("");
    setDescription("");
  };

  return (
    <div className="w-11/12 mx-auto bg-white mt-5 p-4 rounded-md">
      <h3 className="text-2xl font-bold text-center mb-8">
        Please Write Below Your Problem Details
      </h3>
      <form className="my-10" action="" onSubmit={handelFormSubmit}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Please Write Your Ticket Ttitle
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Please write Ticket title"
                value={ticketName}
                onChange={(e) => {
                  setTicketName(e.target.value);
                }}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Priority</legend>
              <select
                value={priority}
                className="select w-full"
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <option disabled={true}>Low</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Name</legend>
              <label className="input validator w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength="3"
                  maxLength="30"
                  title="Only letters, numbers or dash"
                  className="w-full"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </label>
              <p className="validator-hint">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>
            </fieldset>
          </div>
          <div className="w-1/2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Ticket Description</legend>
              <textarea
                className="textarea h-50 w-full"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </fieldset>
          </div>
        </div>
        <button className="btn btn-block btn-primary text-white uppercase text-xl">
          Submit
        </button>
      </form>
      <button
        onClick={onNewTicket}
        className="btn purple-gradient btn-block text-xl text-white uppercase"
      >
        Go Back To Tickets section
      </button>
    </div>
  );
};

export default NewTicket;
