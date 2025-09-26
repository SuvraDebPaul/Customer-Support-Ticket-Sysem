import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-12 border-b-1 border-gray-400 py-10 gap-10 md:gap-20">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h2 className="text-2xl font-bold mb-3">CS — Ticket System</h2>
          <p className="text-justify pr-20 md:pr-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-4 ml">
          <a className="font-bold text-xl">Company</a>
          <a href="#">About Us</a>
          <a href="#">Our Mission</a>
          <a href="#">Contact Saled</a>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-4 ml">
          <a className="font-bold text-xl">Services</a>
          <a href="#">Products & Services</a>
          <a href="#">Customer Stories</a>
          <a href="#">Download Apps</a>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-2 flex flex-col gap-4 ml">
          <a className="font-bold text-xl">Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Join Us</a>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-4 ml">
          <a className="font-bold text-xl">Social Links</a>
          <a href="#" className="flex items-center gap-2">
            <FaSquareXTwitter /> @CS — Ticket System
          </a>
          <a href="#" className="flex items-center gap-2">
            <FaLinkedin /> @CS — Ticket System
          </a>
          <a href="#" className="flex items-center gap-2">
            <FaFacebook /> @CS — Ticket System
          </a>
          <a href="#" className="flex items-center gap-2">
            <FaEnvelope /> support@cst.com
          </a>
        </div>
      </div>
      <div className="text-center py-5">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
