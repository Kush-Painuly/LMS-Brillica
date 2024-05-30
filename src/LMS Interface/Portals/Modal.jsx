import React, { useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import CardData from "./CardData";

const Modal = () => {
  const [drop, setDrop] = useState(true);

  const clickDrop = () => {
    setDrop(false);
  };
  return (
    <>
      <div>
        {drop &&
          createPortal(
            <Backdrop clickDropFun={clickDrop} />,
            document.getElementById("backdrop")
          )}
      </div>
      <div>
        {drop &&
          createPortal(
            <CardData clickDropFun={clickDrop} />,
            document.getElementById("modal")
          )}
      </div>
    </>
  );
};

export default Modal;
