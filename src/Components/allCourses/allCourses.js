import React from "react";
import useCourses from "../../Hooks/useCourses";
import Courses from "../Courses/Courses";

const AllCourses = () => {
  const [courses] = useCourses();
  return (
    <div>
      <Courses courses={courses}>
        <h1 className="fw-bold text-center my-5 text-info">
          Our All Courses Here!
        </h1>
      </Courses>
    </div>
  );
};

export default AllCourses;
