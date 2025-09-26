import Ticket from "./Ticket";
import StatusTicket from "./StatusTicket";
import ResolveTask from "./ResolveTask";

const AllTickets = ({
  allTickets,
  onClickedCard,
  allTask,
  resolveTask,
  onResoveClick,
  onResolveTaskRemove,
}) => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-9">
          <h3 className="text-2xl font-bold mb-6">Customer Tickets</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
            {allTickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                onClickedCard={onClickedCard}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          {/* Task Status */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Task Status</h3>
            {allTask.length === 0
              ? "Select a Ticket To Add Task"
              : allTask.map((ticketStatus) => (
                  <StatusTicket
                    key={ticketStatus.id}
                    taskTicket={ticketStatus}
                    onResoveClick={onResoveClick}
                  />
                ))}
          </div>
          {/* Resolved Task */}
          <div>
            <h3 className="text-2xl font-bold mt-6 mb-2">Resolved Task</h3>
            {resolveTask.length === 0
              ? "No Resolve Task Yet"
              : resolveTask.map((task) => (
                  <ResolveTask
                    key={task.id}
                    task={task}
                    onResolveTaskRemove={onResolveTaskRemove}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTickets;
