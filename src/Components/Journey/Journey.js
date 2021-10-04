import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faGlobe,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Journey = () => {
  return (
    <section className="my-5">
      <Container>
        <Row md={3} lg={3} xs={1} className="g-4">
          <Col className="text-center text-success">
            <FontAwesomeIcon className="fa-5x mb-2" icon={faUserGraduate} />
            <p>
              Top Most Graduation Complete <br /> University and Collage
            </p>
          </Col>
          <Col className="text-center  text-success">
            <FontAwesomeIcon icon={faGlobe} className="fa-5x mb-2" />
            <p>
              Earn certificates <br /> recognized by Industry
            </p>
          </Col>
          <Col className="text-center text-success">
            <FontAwesomeIcon icon={faRocket} className="fa-5x mb-2" />
            <p>
              Build cool projects to <br /> showcase your skills
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Journey;
