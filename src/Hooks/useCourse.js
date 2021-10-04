import { useEffect, useState } from "react";
import useCourses from "./useCourses";

const useCourse = (id) => {
  const [courses] = useCourses();
  const [course, setCourse] = useState();

  useEffect(() => {
    if (courses) {
      const singleCourse = courses.find((item) => item.id === parseInt(id));
      setCourse(singleCourse);
      console.log(course);
    }
  }, [courses]);

  return [course, setCourse];
};

export default useCourse;
