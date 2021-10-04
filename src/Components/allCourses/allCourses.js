import React from "react";
import useCourses from "../../Hooks/useCourses";
import Courses from "../Courses/Courses";

const allCourses = () => {
  const [courses, setCourses] = useCourses();
  return (
    <div>
      <Courses courses={courses}></Courses>
    </div>
  );
};

export default allCourses;
