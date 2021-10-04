import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark overflow-hidden text-white">
      <Container>
        <Row className="g-4" md={2} xs={1}>
          <Col>
            <h3 className="text-center text-warning">Contact Us</h3>
            <div className="text-center py-3">
              <img src={logo} alt="website logo" />
            </div>
            <Row md={2} xs={2}>
              <Col className="text-end">
                <p>Kishoreganj, Dhaka</p>
                <p>1234 Some St</p>
              </Col>
              <Col>
                <p>Phone: 01943244613</p>
                <p>Fax: 1.800.123.4566</p>
              </Col>
            </Row>
          </Col>
          <Col className="text-center text-white">
            <h3 className="text-warning">Company</h3>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent  text-white">
                <Link className="text-decoration-none text-white" to="/home">
                  Home
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                <Link className="text-decoration-none text-white" to="/courses">
                  Courses
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                <Link className="text-decoration-none text-white" to="/about">
                  About
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                <Link className="text-decoration-none text-white" to="/contact">
                  Contact Us
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <p className="text-center">
          All rights reserved by Mosharrof Hosen Munna 2021
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
