import React from "react";
import lmsLogo from "./public/header-logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ clickedSubHeader }) => {
  return (
    <header className="bg-white flex justify-around items-center gap-96 shadow-2xl mb-3">
      <nav
        className="mx-4 flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src={lmsLogo} alt="" />
          </a>
        </div>
      </nav>
      <div className="mx-5 flex justify-around gap-2">
        <div className="p-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <div className="bg-sky-950 w-30 border-1 border-blue-950 rounded-full p-3 text-white">
            <b className="p-2">KP</b>
          </div>
          <div>
            <span className="text-bold">Hi, Kush</span>
          </div>
          <div onClick={clickedSubHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
              className="cursor-pointer"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
