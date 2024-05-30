import React from "react";
import Modal from "../Portals/Modal";
const Cards = ({ showPortal, portal }) => {
  const newObj = [
    {
      id: "1",
      coursedetails: "12pm/Nitin/..",
      course: "MERN stack",
      trainer: "Nitin Bela",
      startdate: "Jan-Aug",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "7",
    },
    {
      id: "2",
      coursedetails: "3pm/Vikas/..",
      course: "Digital Maketing",
      trainer: "Vikas Deol",
      startdate: "Jan-Mar",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "5",
    },
    {
      id: "3",
      coursedetails: "12pm/Narendra/..",
      course: "UI/UX Design",
      trainer: "Narendra Bisht",
      startdate: "Jan-Mar",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "4",
    },
    {
      id: "4",
      coursedetails: "10pm/Aryan/..",
      course: "Data Scientist",
      trainer: "Aryan Desouza",
      startdate: "Mar-sept",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "10",
    },
    {
      id: "5",
      coursedetails: "5pm/Rajesh/..",
      course: "Data Analytics",
      trainer: "Rajesh IkBela",
      startdate: "Aug-Dec",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "15",
    },
    {
      id: "6",
      coursedetails: "2pm/Ramesh/..",
      course: "Networking",
      trainer: "Ramesh Deshmukh",
      startdate: "Feb-Nov",
      starttime: "12:00pm",
      endtime: "2:00pm",
      no_of_stu: "8",
    },
    {
      id: "7",
      coursedetails: "4pm/Naveen/..",
      course: "CyberSecurity",
      trainer: "Naveen Bisht",
      startdate: "Feb-Nov",
      starttime: "4:00pm",
      endtime: "6:00pm",
      no_of_stu: "8",
    },
    {
      id: "8",
      coursedetails: "2pm/Raghav/..",
      course: "Backend Development",
      trainer: "Raghav Sir",
      startdate: "Jan-Apr",
      starttime: "2:00pm",
      endtime: "4:00pm",
      no_of_stu: "10",
    },
    {
      id: "9",
      coursedetails: "6pm/Nidhi/..",
      course: "Webflow&Figma",
      trainer: "Nidhi Bhatt",
      startdate: "Sept-Dec",
      starttime: "6:00pm",
      endtime: "7:00pm",
      no_of_stu: "20",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-start gap-3 p-7">
        {newObj.map((val) => {
          return (
            <div className="bg-white rounded p-6 shadow-2xl border-b-4 border-blue-900 overflow-hidden hover:scale-105 transition ease-in">
              <div className="flex justify-between gap-2 items-center mb-4">
                <p className="text-lg font-bold">{val.coursedetails}</p>
                <button
                  className="text-black font-bold hover:text-blue-700 cursor-pointer"
                  onClick={() => {
                    showPortal();
                  }}
                >
                  View detail
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
              <div>
                <div>
                  <p className="text-gray-600">Course:{val.course}</p>
                </div>
                <div>
                  <p className="text-gray-600">Trainer:{val.trainer}</p>
                </div>
                <div className="border-b border-dashed border-gray-600">
                  <p className="text-gray-600">Duration:{val.startdate}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">
                      Timing:{val.starttime} - {val.endtime}
                    </p>
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
                    <span>{val.no_of_stu}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>{portal && <Modal />}</div>
      </div>
    </>
  );
};

export default Cards;
