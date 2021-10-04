import { useEffect, useState } from "react";
import useCourses from "./useCourses";

const useCourse = (id) => {
  // collect all courses from use Courses
  const [courses] = useCourses();
  const [course, setCourse] = useState();

  useEffect(() => {
    const singleCourse = courses.find((item) => item.id === parseInt(id));
    setCourse(singleCourse);
  }, [courses, id]);

  return [course, setCourse];
};

export default useCourse;
