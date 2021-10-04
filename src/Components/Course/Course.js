import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

const Course = (props) => {
  const { id, courseName, startDate, img, category, enroll, comments, price } =
    props.course;

  const history = useHistory();
  const handleCardDetails = () => {
    history.push(`courses/course/${id}`);
  };

  return (
    <Col>
      <Card
        onClick={handleCardDetails}
        className="h-100"
        style={{ cursor: "pointer" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-info">{courseName}</Card.Title>
          <Card.Text>
            <h6>Category: {category} </h6>
            <h6>Start Date: {startDate}</h6>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-success text-white">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <FontAwesomeIcon icon={faUser} /> {enroll}
              <FontAwesomeIcon icon={faComment} className="ms-3" /> {comments}
            </div>
            <div>
              <h4 className="mb-0 text-warning">{price}</h4>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Course;
