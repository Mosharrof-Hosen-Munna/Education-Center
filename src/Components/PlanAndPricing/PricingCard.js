import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const PricingCard = (props) => {
  return (
    <Col>
      <Card className="h-100" style={{ borderRadius: "10px" }}>
        <Card.Body className="p-0 bg-success">
          <div className="p-3 text-center text-white bg-warning ">
            <h1>{props.title}</h1>
          </div>
          <h1
            className="text-center text-white py-4"
            style={{ fontSize: "80px" }}
          >
            {props.price}
          </h1>
          <p className="text-center text-white w-75 pb-4 mx-auto">
            {props.desc}
          </p>
        </Card.Body>
        <Card.Footer className="bg-info">
          <Button variant="success" className="mx-auto d-block">
            I WANT THIS PLAN
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PricingCard;
