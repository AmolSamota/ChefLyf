import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import pizza from "../../assests/recepies/download.jfif";

const Ingredients = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">Ingredients</h1>

        <Container>
        <Row className="pt-3 pb-5 align-items-center">
        
        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
        </Col>

        </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ingredients;