import React from "react";
import { Link } from "react-router-dom";

const SubHeader = ({ clickedSubHeader }) => {
  return (
    <>
      <div className="w-1/3 bg-white absolute top-20 right-20 p-10 z-20">
        <div className="border-2 border-gray-300 py-5 px-10 rounded relative">
          <h2 className="font-medium lowercase text-xl text-blue-950 py-2 text-center">
            kush painuly
          </h2>
          <p className="text-center font-light text-gray-400">
            kushpainuly180@gmail.com
          </p>
          <p className="text-center text-sm font-light text-gray-400 py-1">
            81267 03794
          </p>
        </div>
        <div className="border-1 border-indigo-950 bg-blue-950 p-4 rounded-full absolute top-0 right-[40%]">
          <h1 className="font-bold text-2xl p-1 text-white">KP</h1>
        </div>
        <div className="border-2 border-gray-300 py-2  m-1 flex items-center justify-between">
          {/* chat-icon */}
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#00ff00"
              viewBox="0 0 256 256"
            >
              <path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"></path>
            </svg>
          </div>
          {/* info-text */}
          <div>
            <h3 className="text-md font-bold capitalize text-gray-800">
              chat support
            </h3>
          </div>
          {/* caret-right-icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </div>
        <div className="border-2 border-gray-300 py-2  m-1 flex items-center justify-between">
          {/* help-icon */}
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#0000ff"
              viewBox="0 0 256 256"
            >
              <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM136,143.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.23,139.93,136,143.28ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
            </svg>
          </div>
          {/* info-text */}
          <Link to="/help">
            <div onClick={clickedSubHeader}>
              <h3 className="text-md font-bold capitalize text-gray-800">
                help desk
              </h3>
            </div>
          </Link>
          {/* caret-right-icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </div>
        <div className="border-2 border-gray-300 py-2  m-1 flex items-center justify-between">
          {/* logout-icon */}
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
            </svg>
          </div>
          {/* info-text */}
          <div>
            <h3 className="text-md font-bold capitalize text-gray-800">
              logout
            </h3>
          </div>
          {/* caret-right-icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
