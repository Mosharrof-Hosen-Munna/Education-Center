import React from "react";
import { Container, Row } from "react-bootstrap";
import useTeachers from "../../Hooks/useTeachers";
import PlanAndPricing from "../PlanAndPricing/PlanAndPricing";
import Teacher from "../Teacher/Teacher";

const About = () => {
  const [teachers] = useTeachers();
  return (
    <>
      <section>
        <Container>
          <h1 className="fw-light text-center text-success my-4">
            Our Teachers
          </h1>
          <Row md={3} lg={3} xs={1}>
            {teachers.map((teacher) => (
              <Teacher teacher={teacher}></Teacher>
            ))}
          </Row>
        </Container>
      </section>
      <PlanAndPricing></PlanAndPricing>
    </>
  );
};

export default About;
