import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  const ticketPromise = fetch(import.meta.env.BASE_URL + "data.json").then(
    (res) => res.json()
  );
  const [newTicket, setNewTicket] = useState(false);
  const handelNewTicket = () => {
    setNewTicket(!newTicket);
  };
  return (
    <>
      <Navbar clickNewTicket={handelNewTicket} />
      <Suspense
        fallback={
          <div className="w-11/12 mx-auto text-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Main
          ticketPromise={ticketPromise}
          newTicket={newTicket}
          onNewTicket={handelNewTicket}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
