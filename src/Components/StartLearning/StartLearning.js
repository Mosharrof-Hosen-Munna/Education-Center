import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import StartLearningLogo from "../../images/Start-Learning.webp";
const StartLearning = () => {
  return (
    <section className="bg-success py-5">
      <Container>
        <Row md={2} lg={2} sm={1} gap>
          <Col>
            <img src={StartLearningLogo} alt="" />
          </Col>
          <Col>
            <h2 className="fst-italic text-white">
              The Great <span className="text-warning">Courses</span> From The
              <span className="text-info"> World</span> Best Universities
            </h2>
            <p className="my-5 text-light">
              Our courses are built in partnership <br /> with technology
              leaders and are relevant to industry <br /> needs.
            </p>
            <Button className="bg-white text-dark" size="lg">
              Start Learning Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StartLearning;
