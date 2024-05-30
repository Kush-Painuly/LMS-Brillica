import React from "react";

const Modules = () => {
  return (
    <>
      <div className="mb-2 border-1 rounded p-1 bg-gradient-to-t from-transparent to-indigo-300 shadow-xl">
        <div className="border-b my-2 border-dashed border-gray-300">
          <div className="w-full relative">
            <h1 className="uppercase text-3xl tracking-widest font-bold text-gray-600 px-8 pt-10 pb-2">
              MERN STACK
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center gap-3 px-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z"></path>
                </svg>
                <span>remaining fees (&#8377; 0)</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-500 px-2">Your Progress</h2>
              </div>
            </div>
          </div>
          <div className="px-8">
            <div className="h-3 mt-2 bg-gradient-to-l from-transparent to-indigo-300 rounded-full">
              <div
                className="h-full bg-green-400 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="px-8 my-2">
            <p className="text-sm font-thin tracking-widest">50% Completed</p>
          </div>
        </div>
        <div className="px-8 my-5">
          <span className="font-bold text-gray-500 text-sm">
            Registered on:
          </span>
          <span className="font-bold text-gray-500 text-sm">24 Jan,2024</span>
        </div>
      </div>
      <div className="w-2/5 my-12 mx-2 hover:-translate-y-5 ease-in-out linear transition">
        <div className="bg-white rounded p-6 shadow-2xl border-b-4 border-blue-900 overflow-hidden">
          <div className="flex justify-between gap-2 items-center mb-2">
            <p className="text-lg font-bold">12pm/MERN/NITIN/5-FEB</p>
            <span className="text-sm font-thin">Attendance</span>
            {/*ATTENDANCE TO BE FILLED HERE  */}
            <span>96%</span>
          </div>
          <span className="text-sm font-bold text-gray-500">Current Batch</span>
          <div>
            <div>
              <p className="text-gray-600">Course:MERN STACK</p>
            </div>
            <div>
              <p className="text-gray-600">Trainer:Nitin Bale</p>
            </div>
            <div className="border-b border-dashed border-gray-600">
              <p className="text-gray-600">Duration: Jan - Aug</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">Timing: 12:00pm - 2:00pm</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path>
                </svg>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modules;
