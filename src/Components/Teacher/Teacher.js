import React from "react";
import { Card, Col } from "react-bootstrap";

const Teacher = ({ teacher }) => {
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
          {/* <h5 className="text-success">{name}</h5> */}
          <h6>Category: {category} </h6>
          <p>{description}</p>
        </Card.Body>
        {/* <Card.Footer className="bg-success text-white">
             <div className="d-flex align-items-center justify-content-between">
               <div>
                 <FontAwesomeIcon icon={faUser} /> {enroll}
                 <FontAwesomeIcon icon={faComment} className="ms-3" />{" "}
                 {comments}
               </div>
               <div>
                 <h4 className="mb-0 text-warning">{price}</h4>
               </div>
             </div>
           </Card.Footer> */}
      </Card>
    </Col>
  );
};

export default Teacher;
