import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Modules from "./Modules";
import Batches from "./Batches";
import TestModule from "./TestModule";
import Resources from "./Resources";
import { Route, Routes } from "react-router-dom";
import Cards from "../Cards/Cards";
import CompletedBatches from "./CompletedBatches";
import UpcomingBatches from "./UpcomingBatches";
import Error404 from "./Error404";
import SubHeader from "./SubHeader";
import Help from "./Help";
import CreateBatch from "./CreateBatch";
const Interface = () => {
  const [open, setOpen] = useState(false);

  const passFunc = () => {
    setOpen((prev) => !prev);
  };
  const [subheader, setSubHeader] = useState(false);

  const onToggleSubHeader = () => {
    setSubHeader((toggle) => !toggle);
  };
  return (
    <div>
      {/* header */}
      <Header clickedSubHeader={onToggleSubHeader} />
      {subheader && <SubHeader clickedSubHeader={onToggleSubHeader} />}
      {/* Sidebar */}
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className=" w-4/5">
          <Routes>
            <Route path="/" element={<Modules />}></Route>
            <Route path="/module" element={<Modules />}></Route>
            <Route path="/batch" element={<Batches />}>
              <Route
                index
                element={<Cards showPortal={passFunc} portal={open} />}
              ></Route>
              <Route
                path="current"
                element={<Cards showPortal={passFunc} portal={open} />}
              ></Route>
              <Route path="completed" element={<CompletedBatches />}></Route>
              <Route path="upcoming" element={<UpcomingBatches />}></Route>
              <Route path="createbatch" element={<CreateBatch />}></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Route>
            <Route path="/testmodule" element={<TestModule />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/help" element={<Help />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Interface;
