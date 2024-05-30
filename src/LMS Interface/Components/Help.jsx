import React from "react";
import technicalimg from "./public/technical-issue.png";
import accountimg from "./public/account issue.png";
const Help = () => {
  return (
    <>
      <div className=" bg-gray-100 p-5">
        <div className="text-center mt-2">
          <h1 className="text-3xl font-bold text-blue-500">
            Encountering Issues?
          </h1>
        </div>
        <div className="flex justify-center gap-20 p-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#ff0000"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"></path>
            </svg>
          </div>
          <div className="w-3/5">
            <p className="text-center">
              Fear not! Our dedicated Support Team is here to swiftly resolve
              any problem you're facing. Simply raise a ticket, and we'll get to
              work on finding the solution for you.
            </p>
          </div>
        </div>
      </div>
      {/* inner-components */}
      <div className="bg-gray-300 flex items-center justify-center">
        {/* card */}
        <div className="w-4/5 bg-white p-2 m-3 shadow-lg">
          {/* issue-query */}
          <div className="p-4">
            <p className="font-medium text-sm text-gray-800">
              Your Issue is related to:
            </p>
          </div>
          {/* related-issue */}
          <div className="flex items-center justify-center gap-10 p-3">
            {/* first-issue */}
            <div className="w-30 bg-gray-200 shadow-lg rounded cursor-pointer transition hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 hover:border p-3">
              <img
                src={technicalimg}
                alt="technical-issue-image"
                className="w-20 h-20 p-2"
              />
              <p className="text-center text-blue-700 font-bold">LMS</p>
            </div>
            {/* second-issue */}
            <div className="w-30 bg-gray-200 shadow-lg rounded transition hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 hover:border p-3">
              <img
                src={accountimg}
                alt="account-issue-image"
                className="w-20 h-20 p-2"
              />
              <p className="text-center text-blue-700 font-bold">Account</p>
            </div>
          </div>
          {/* issue-describe */}
          <div className="p-4">
            <p className="font-medium text-sm text-gray-800">
              Describe your Issue:
            </p>
          </div>
          {/* issue input */}
          <div className="w-42 ">
            <textarea
              name="issue"
              id="issue"
              className="block w-full rounded-md border-0  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Describe your Issue"
            />
          </div>
          <div className="m-3 flex items-center justify-around gap-10">
            {/* info text */}
            <div className="p-5">
              <p className="font-bold text-lg text-black capitalize">
                Upload File
              </p>
            </div>
            {/* placeholder image */}
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="placeholder-image"
                className="w-64 h-64 bg-gray-200"
              />
              <button className="mt-3 mx-8 rounded-md uppercase cursor-pointer  text-blue-700 border-2 border-blue-700 py-2 px-5 hover:bg-blue-700 hover:text-white">
                Upload image
              </button>
            </div>
          </div>
          {/* raise-tickets */}
          <div>
            <button className="capitalize rounded-md cursor-pointer  text-white bg-blue-700 border-2 border-blue-700 py-2 px-5 hover:bg-white hover:text-blue-700 transition ease-in duration-500 delay-100 ">
              Raise ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
