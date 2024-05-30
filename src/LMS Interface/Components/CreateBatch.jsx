import React, { useState } from "react";

const CreateBatch = () => {
  const [courseId, setCourseId] = useState();
  const [coursedets, setCourseDets] = useState();
  const [course, setCourse] = useState();
  const [trainer, setTrainer] = useState();
  const [startdate, setStartDate] = useState();
  const [starttime, setStartTime] = useState();
  const [endtime, setEndTime] = useState();
  const [no_of_students, setStudents] = useState();
  const [batch, setBatch] = useState([]);

  const createBatch = () => {
    const values = {
      courseId,
      coursedets,
      course,
      trainer,
      startdate,
      starttime,
      endtime,
      no_of_students,
    };

    console.log(values);

    setBatch([...batch, values]);

    setCourseId("");
    setCourseDets("");
    setCourse("");
    setTrainer("");
    setStartDate("");
    setStartTime("");
    setEndTime("");
    setStudents("");
  };
  return (
    <>
      <div className="flex items-center justify-center bg-gray-300 m-2">
        <div className="w-10/12 bg-white p-1 mt-3">
          <p className="text-center text-xl font-bold p-3 mt-2">
            Create Your Batch
          </p>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Course id:</h1>
            <input
              type="text"
              value={courseId}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setCourseId(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Course details:</h1>
            <input
              type="text"
              value={coursedets}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setCourseDets(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Course:</h1>
            <input
              type="text"
              value={course}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Trainer:</h1>
            <input
              type="text"
              value={trainer}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setTrainer(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Start Date</h1>
            <input
              type="text"
              value={startdate}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">Start-Time</h1>
            <input
              type="text"
              value={starttime}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">End-Time</h1>
            <input
              type="text"
              value={endtime}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div className="p-2 flex items-center gap-20">
            <h1 className="text-lg font-medium">No-Of-students</h1>
            <input
              type="text"
              value={no_of_students}
              placeholder="Enter the course Id"
              className="border border-gray-500 px-6 py-2 rounded-md"
              onChange={(e) => setStudents(e.target.value)}
            />
          </div>
          <div className="text-center mt-4">
            <button
              className="rounded border border-sky-600 px-6 py-2 text-lg font-medium transition delay-100 duration-300 hover:bg-sky-600 hover:text-white"
              onClick={createBatch}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBatch;
