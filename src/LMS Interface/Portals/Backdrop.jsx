import React from "react";
import "./backgroundDrop.css";

const Backdrop = ({ clickDropFun }) => {
  return (
    <div
      className="background-drop"
      onClick={() => {
        clickDropFun();
      }}
    ></div>
  );
};

export default Backdrop;
