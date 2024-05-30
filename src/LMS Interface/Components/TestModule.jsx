import React from "react";
import { Link, Outlet } from "react-router-dom";

const TestModule = () => {
  return (
    <>
      <div className="w-full bg-white rounded">
        <div className="flex items-center justify-center gap-8 mt-3">
          <div className="border-2 p-3 mt-3 border-gray-200 hover:bg-indigo-600 hover:text-white rounded-full flex items-center justify-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
              </svg>
            </div>
            <Link to="/all-assignments">All Assignments</Link>
          </div>
          <div className="border-2 p-2 mt-2 border-gray-200 hover:bg-indigo-600 hover:text-white rounded-full flex items-center justify-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#000000"
                className="hover:fill-white"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM72.57,200a64,64,0,0,1,110.86,0ZM216,200H201.33a80.14,80.14,0,0,0-43.69-42.28,48,48,0,1,0-59.28,0A80.14,80.14,0,0,0,54.67,200H40V56H216V200Z"></path>
              </svg>
            </div>
            <Link className="p-1" to="/new-assignments">
              New Assignments
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-3">
          <div className="bg-gray-100 hover:bg-gray-200 border-1 rounded border-gray-500 shadow-2xl m-6 p-4">
            <h2 className="text-blue-600 font-bold text-xl p-4 m-2 uppercase">
              css as-1
            </h2>
            <div className="flex flex-col items-center justify-start gap-2 p-4">
              <div className="flex items-center justify-start gap-8 ">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600 uppercase">
                    mern
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-8">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600">CSS</span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-8">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600">Nitin</span>
                </div>
              </div>
              <div className="flex justify-between gap-20">
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">15 mins</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">1/1</span>
                  </div>
                </div>
              </div>
              <div className="font-medium text-gray-500">
                <span className="text-md text-start capitalize">
                  submit before
                </span>
              </div>
              <div className="flex justify-center gap-8 p-1">
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">
                      09, Mar, 2024
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">11:18 AM</span>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center px-4 py-2 rounded">
                  <span className="px-8 text-md font-bold">View score</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 border-1 rounded border-gray-500 shadow-2xl m-6 p-4">
            <h2 className="text-blue-600 font-bold text-xl p-4 m-2 uppercase">
              javascript as-1
            </h2>
            <div className="flex flex-col items-center justify-start gap-2 p-4">
              <div className="flex items-center justify-start gap-8 ">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600 uppercase">
                    mern
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-8">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600">javascript</span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-8">
                <div className="p-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="p-3">
                  <span className="font-medium text-gray-600">Nitin</span>
                </div>
              </div>
              <div className="flex justify-between gap-20">
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">30 mins</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">1/1</span>
                  </div>
                </div>
              </div>
              <div className="font-medium text-gray-500">
                <span className="text-md text-start capitalize">
                  submit before
                </span>
              </div>
              <div className="flex justify-center gap-8 p-1">
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">
                      16, Apr, 2024
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="font-medium text-gray-600">2:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center px-4 py-2 rounded">
                  <span className="px-8 text-md font-bold">View score</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TestModule;
