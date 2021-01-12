import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
// import "./comment.css";

function Comment() {
    return(
    <div>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            
              <Col xs={12} md={6}>

              <Row className="justify-content-left mb-2 mr-2 ">
                  <h1 className="pt-3 text-left font-details pb-3 u">Comments</h1>
              </Row>
            </ Col>
        </ Row>
        </ Container> 
    </div>
);

};

export default Comment;