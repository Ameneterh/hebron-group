import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-slate-950 p-2 sm:p-10 text-white botder-t border-white">
      {/* top */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start">
        <Link to="/" className="hidden sm:flex gap-2 items-center">
          <img
            src="/school-badge.png"
            alt="logo"
            className="h-20 w-20 p-2 rounded-full"
          />
          <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white">
            <span className="text-4xl flex flex-row gap-2 px-2 bg-gradient-to-r from-green-500 via-green-950 to-blue-950 rounded-md border-b-2 border-b-white">
              Hebron
            </span>
            <span className="text-blue-100 font-normal">Group of Schools</span>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-2 text-slate-300">
          <p className="w-full text-center">
            Plot 6, Road 1, Logudu - Benbo, Behind Apata Grammar School, Apata,
            Ibadan
          </p>
          <p className="flex gap-4 items-center">
            <FiPhoneCall />
            <Link to="tel:2348036532472" className="hover:underline">
              +2348036532472
            </Link>
            <Link to="tel:2348034402072" className="hover:underline">
              +2348034402072
            </Link>
          </p>

          <div className="flex gap-3 items-center">
            <p>Social Media</p>
            <Link
              to="https://www.youtube.com/channel/UClBBYrD_26TMklgDVxnETNA/"
              className="hover:scale-125 transition-all"
            >
              <FaYoutube />
            </Link>
            <Link
              to="https://www.instagram/galaxyelearning"
              className="hover:scale-125 transition-all"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-48 mt-3 sm:mt-0 flex justify-between sm:flex-col text-right gap-2">
          <Link
            to="/"
            className="text-slate-400 hover:underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-slate-400 hover:underline underline-offset-2"
          >
            About us
          </Link>
          <Link
            to="/resources"
            className="text-slate-400 hover:underline underline-offset-2"
          >
            Resources
          </Link>
          <Link
            to="/blogs"
            className="text-slate-400 hover:underline underline-offset-2"
          >
            Blogs Page
          </Link>
          <Link
            to="/contact"
            className="text-slate-400 hover:underline underline-offset-2"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full pt-4 border-t text-yellow-200 border-yellow-200 mt-8">
        <p className="w-full text-center flex items-center justify-center gap-2">
          &copy; <span>{new Date().getFullYear()}</span> Amene Ter'Hemen
          <Link to="tel:+2348154230654">
            <FiPhoneCall />
          </Link>
          <Link to="https://wa.me/2348154230654">
            <BsWhatsapp />
          </Link>
          <Link to="https://www.twitter.com/ameneterh">
            <FaTwitter />
          </Link>
        </p>
      </div>
    </div>
  );
}
