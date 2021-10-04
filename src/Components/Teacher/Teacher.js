import React from "react";
import { Card, Col } from "react-bootstrap";

const Teacher = ({ teacher }) => {
  // distructuring teacher object
  const { img, name, description, category } = teacher;
  return (
    <Col>
      <Card className="h-100" style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={img}
          className="border-bottom border-success border-5"
        />
        <Card.Body>
          <Card.Title className="text-info">{name}</Card.Title>
          <h6>Category: {category} </h6>
          <p>{description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Teacher;
