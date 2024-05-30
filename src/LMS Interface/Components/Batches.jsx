import React, { useRef, useState } from "react";
import Cards from "../Cards/Cards";
import UpcomingBatches from "../Components/UpcomingBatches";
import CompletedBatches from "../Components/CompletedBatches";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Batches = () => {
  // const cardsObj = [
  //   {
  //     id: "1",
  //     coursedetails: "12pm/Nitin/..",
  //     course: "MERN stack",
  //     trainer: "Nitin Bela",
  //     startdate: "Jan-Aug",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "7",
  //   },
  //   {
  //     id: "2",
  //     coursedetails: "3pm/Vikas/..",
  //     course: "Digital Maketing",
  //     trainer: "Vikas Deol",
  //     startdate: "Jan-Mar",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "5",
  //   },
  //   {
  //     id: "3",
  //     coursedetails: "12pm/Narendra/..",
  //     course: "UI/UX Design",
  //     trainer: "Narendra Bisht",
  //     startdate: "Jan-Mar",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "4",
  //   },
  //   {
  //     id: "4",
  //     coursedetails: "10pm/Aryan/..",
  //     course: "Data Scientist",
  //     trainer: "Aryan Desouza",
  //     startdate: "Mar-sept",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "10",
  //   },
  //   {
  //     id: "5",
  //     coursedetails: "5pm/Rajesh/..",
  //     course: "Data Analytics",
  //     trainer: "Rajesh IkBela",
  //     startdate: "Aug-Dec",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "15",
  //   },
  //   {
  //     id: "6",
  //     coursedetails: "2pm/Ramesh/..",
  //     course: "Networking",
  //     trainer: "Ramesh Deshmukh",
  //     startdate: "Feb-Nov",
  //     starttime: "12:00pm",
  //     endtime: "2:00pm",
  //     no_of_stu: "8",
  //   },
  //   {
  //     id: "7",
  //     coursedetails: "4pm/Naveen/..",
  //     course: "CyberSecurity",
  //     trainer: "Naveen Bisht",
  //     startdate: "Feb-Nov",
  //     starttime: "4:00pm",
  //     endtime: "6:00pm",
  //     no_of_stu: "8",
  //   },
  //   {
  //     id: "8",
  //     coursedetails: "2pm/Raghav/..",
  //     course: "Backend Development",
  //     trainer: "Raghav Sir",
  //     startdate: "Jan-Apr",
  //     starttime: "2:00pm",
  //     endtime: "4:00pm",
  //     no_of_stu: "10",
  //   },
  //   {
  //     id: "9",
  //     coursedetails: "6pm/Nidhi/..",
  //     course: "Webflow&Figma",
  //     trainer: "Nidhi Bhatt",
  //     startdate: "Sept-Dec",
  //     starttime: "6:00pm",
  //     endtime: "7:00pm",
  //     no_of_stu: "20",
  //   },
  // ];
  let [cardComponent, setCardComponent] = useState([
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
      no_of_stu: "5",
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
  ]);
  const getinputrefernce = useRef();
  const printValues = () => {
    // cardComponent = getinputrefernce.current.value;
    // let item = cardsObj.filter((inp) => inp.id === cardComponent);
    // if (cardComponent <= 0 || cardComponent >= cardsObj.length) {
    //   setCardComponent(cardsObj);
    // } else {
    //   setCardComponent(item);
    // }

    //search bar implementation
    cardComponent = getinputrefernce.current.value.toLowerCase();
    let item = cardsObj.filter((inp) => {
      let keys = Object.keys(inp);
      for (let i = 0; i < keys.length; i++) {
        let keyVal = keys[i];
        if (String(inp[keyVal]).toLocaleLowerCase().includes(cardComponent)) {
          return inp;
        }
      }
    });
    setCardComponent(item);
  };
  return (
    <>
      <div className="relative m-3">
        <div className="w-64">
          <input
            type="text"
            className="p-5 bg-gray-200 border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-full w-full px-3 py-2"
            placeholder="Search Text Here"
            onChange={printValues}
            ref={getinputrefernce}
          />
        </div>
        <div className="absolute top-3 left-56 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
        <div className="flex  justify-start items-center gap-4 mt-3 mb-3">
          <div className=" hover:bg-violet-950 rounded text-black border-1 border-black">
            <Link
              to="current"
              className=" block text-black-300 hover:text-white px-4 py-2"
            >
              Current
            </Link>
          </div>
          <div className="hover:bg-violet-950 rounded text-black border-1 border-black">
            <Link
              to="upcoming"
              className="block text-black-300 hover:text-white px-4 py-2"
            >
              Upcoming
            </Link>
          </div>
          <div className="hover:bg-violet-950 rounded text-black border-1 border-black">
            <Link
              to="completed"
              className="block text-black-300 hover:text-white px-4 py-2"
            >
              Completed
            </Link>
          </div>
          <div className="hover:bg-violet-950 rounded text-black border-1 border-black">
            <Link
              to="createbatch"
              className="block text-black-300 hover:text-white px-4 py-2"
            >
              Create Batch
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Batches;
