import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { MdAddCall, MdSms } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen p-2 sm:p-20">
      <div className="flex flex-col w-full max-w-3xl mx-auto bg-slate-400 text-center items-center py-2 sm:py-10 rounded-lg">
        <h1 className="text-3xl font-bold">
          Get in touch with us{" "}
          <span className="text-red-500" style={{ fontFamily: "cursive" }}>
            TODAY
          </span>
        </h1>
        <h2 className="mt-4 text-2xl">For more information:</h2>
        <div className="w-full bg-slate-200 py-2 text-lg">
          <p className="text-xl">Send us an email:</p>
          <Link
            to="mailto:hebrongroupofschool@gmail.com"
            className="text-blue-600 hover:underline"
          >
            hebrongroupofschool@gmail.com
          </Link>{" "}
          or{" "}
          <Link
            to="mailto:galaxygg2004@yahoo.com"
            className="text-blue-600 hover:underline"
          >
            galaxygg2004@yahoo.com
          </Link>
        </div>
        <div className="w-full bg-slate-200 py-2 text-lg">
          <p className="text-xl">Call, Text, or WhatsApp:</p>
          <span className="flex gap-3 items-center justify-center">
            <MdAddCall className="text-blue-700" />
            <MdSms className="text-black" />
            <Link
              to="tel:2348036532472"
              className="text-blue-600 hover:underline"
            >
              +2348036532472
            </Link>{" "}
            or <BsWhatsapp className="text-green-700" />
            <Link
              to="https://wa.me/2348034402072"
              className="text-blue-600 hover:underline"
            >
              +2348034402072
            </Link>
          </span>
        </div>
        <p className="flex gap-1 w-full py-4 text-lg items-center justify-center text-red-700">
          Connect us on <FaInstagram />
          <Link
            to="http://www.instagram.com/galaxyelearning"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-950 hover:underline"
          >
            @galaxyelearning
          </Link>
        </p>
        <p className="text-2xl font-bold mb-2">
          You can visit the school premises:
        </p>
        <p className="text-2xl">
          <b>MONDAYS-FRIDAYS</b>: 8.00 AM - 2.00 PM
        </p>
        <div className="bg-slate-200 mt-4 p-2 text-xl rounded-lg">
          <b>HELP US SERVE YOU BETTER;</b> <br />
          Fill this form{" "}
          <Link
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            HGOS - Survey Form
          </Link>
        </div>
      </div>
    </div>
  );
}
