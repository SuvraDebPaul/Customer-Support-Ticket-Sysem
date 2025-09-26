import React, { use, useState } from "react";
import { toast } from "react-toastify";
import Banner from "./Banner";
import Tickets from "./Tickets";
import NewTicket from "./NewTicket";

const Main = ({ ticketPromise, newTicket, onNewTicket }) => {
  const allTicketsInfo = use(ticketPromise);
  const [allTickets, setAllTickets] = useState(allTicketsInfo);
  const [allTask, setAllTask] = useState([]);
  const [resolveTask, setResolvedTask] = useState([]);
  const handelClickedCard = (ticket) => {
    const isDublicate = allTask.some((task) => task.id === ticket.id);
    if (isDublicate) {
      toast.error("This ticket is already in Task Status!");
      return;
    }
    setAllTask([...allTask, ticket]);
    toast.success("Tickets Sucessfully Added To Task Status");
  };

  const handelResoveClick = (task) => {
    setResolvedTask([...resolveTask, task]);
    const filterredTask = allTask.filter((tasks) => {
      return tasks.id !== task.id;
    });
    setAllTask(filterredTask);
    const filteredTickets = allTickets.filter(
      (tickets) => tickets.id !== task.id
    );
    setAllTickets(filteredTickets);
    toast.success("Tickets Sucessfully Added To Resolved Task");
  };

  const onResolveTaskRemove = (Task) => {
    const filterResolvedTask = resolveTask.filter((tasks) => {
      return tasks.id !== Task.id;
    });
    setResolvedTask(filterResolvedTask);
    toast.error("Resolved Task Has Been Removed Sucessfully");
  };

  let progressCounter = allTask.length;
  let resolveTaskCounter = resolveTask.length;

  return (
    <main>
      {newTicket ? (
        <NewTicket onNewTicket={onNewTicket} />
      ) : (
        <>
          <Banner
            progressCounter={progressCounter}
            resolveTaskCounter={resolveTaskCounter}
          />
          <Tickets
            allTickets={allTickets}
            onClickedCard={handelClickedCard}
            allTask={allTask}
            setAllTask={setAllTask}
            onResoveClick={handelResoveClick}
            resolveTask={resolveTask}
            onResolveTaskRemove={onResolveTaskRemove}
          />
        </>
      )}

      {/* {newTicket && <NewTicket />}
      <Banner
        progressCounter={progressCounter}
        resolveTaskCounter={resolveTaskCounter}
      />
      <Tickets
        allTickets={allTickets}
        onClickedCard={handelClickedCard}
        allTask={allTask}
        setAllTask={setAllTask}
        onResoveClick={handelResoveClick}
        resolveTask={resolveTask}
        onResolveTaskRemove={onResolveTaskRemove}
      /> */}
    </main>
  );
};

export default Main;
