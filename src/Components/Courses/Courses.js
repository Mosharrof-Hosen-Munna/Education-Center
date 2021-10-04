import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "../Course/Course";

const Courses = (props) => {
  return (
    <section className="py-4" style={{ background: "#F0F2F5" }}>
      <Container>
        {props.children}
        <Row md={3} lg={3} xs={1} className="g-4">
          {props.courses?.map((course) => (
            <Course course={course}></Course>
          ))}
        </Row>
        <div className="text-center">
          <Link to="/courses" className="btn btn-primary btn-lg my-3">
            See More Courses
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
