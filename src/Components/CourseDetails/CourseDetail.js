import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useCourse from "../../Hooks/useCourse";
import useCourses from "../../Hooks/useCourses";
import Course from "../Course/Course";

const CourseDetail = () => {
  const { id } = useParams();
  const [course] = useCourse(id);
  return (
    <Container>
      <Course course={course ? course : {}}></Course>;
    </Container>
  );
};

export default CourseDetail;
