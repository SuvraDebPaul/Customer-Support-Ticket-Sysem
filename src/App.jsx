import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  const ticketPromise = fetch("/data.json").then((res) => res.json());

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="w-11/12 mx-auto text-center">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Main ticketPromise={ticketPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
