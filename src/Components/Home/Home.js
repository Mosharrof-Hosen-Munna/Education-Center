import React from "react";
import useCourses from "../../Hooks/useCourses";
import Courses from "../Courses/Courses";
import Journey from "../Journey/Journey";

import StartLearning from "../StartLearning/StartLearning";

const Home = () => {
  const [courses, setCourses] = useCourses();
  console.log(courses);
  return (
    <>
      <StartLearning></StartLearning>
      <Courses courses={courses?.slice(0, 5)}>
        <h1 className="fw-bold text-center my-5 text-info">
          Courses Starting Soon
        </h1>
      </Courses>
      <Journey></Journey>
    </>
  );
};

export default Home;
