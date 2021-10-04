import React from "react";
import useCourses from "../../Hooks/useCourses";
import AllCourses from "../AllCourses/AllCourses";
import Courses from "../Courses/Courses";
import Journey from "../Journey/Journey";

import StartLearning from "../StartLearning/StartLearning";

const Home = () => {
  const [courses] = useCourses();
  // const [course] = useCourse();

  return (
    <>
      <StartLearning></StartLearning>

      <Courses courses={courses?.slice(0, 5)} detailsButton>
        <h1 className="fw-bold text-center my-5 text-info">
          Courses Starting Soon
        </h1>
      </Courses>
      <Journey></Journey>
    </>
  );
};

export default Home;
