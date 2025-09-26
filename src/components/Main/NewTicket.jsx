import React from "react";

const NewTicket = ({ onNewTicket }) => {
  return (
    <div className="w-11/12 mx-auto bg-white mt-10 p-4 rounded-md">
      <form action="">
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
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Priority</legend>
              <select defaultValue="Pick a browser" className="select w-full">
                <option disabled={true}>Low</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
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
              ></textarea>
            </fieldset>
          </div>
        </div>
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
