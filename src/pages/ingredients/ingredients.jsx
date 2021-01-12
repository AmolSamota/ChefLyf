import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import pizza from "../../assests/recepies/download.jfif";
import Ingredient from "../../components/ingredient";
import {BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Ingredients = () => {
  return (
    <div id="about">
      <Router>
      <Route path="/ingredient" exact component={Ingredient} />
      </Router>
      
      <div className="about">
      <Container>
          <Row className="pt-3 pb-5 align-items-center">
            
              <Col xs={12} md={6}>
                <Row className="justify-content-left mb-2 mr-2 ">
                  <h1 className="pt-3 text-left font-details pb-3 u">Ingredients</h1>
                </Row>
              </Col>

              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                <h5 className="pt-3 text-right font-details pb-3 u">Servings &nbsp;
                <input type="number" name="" id=""/>
                <input type="submit" value="submit"/>
                </h5>
                </Row>
              </Col>

            </Row>
        </Container>

        
        

        <Container>
        <Row className="pt-3 pb-5 align-items-center">
        
        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
            </Row>
            <Row className="justify-content-center mb-2 mr-2 ">
                <h5>Macroni 20 gm</h5>
                {/* <h2><input className="inl" type="number"></input></h2> */}
            </Row>

        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
              <Row className="justify-content-center mb-2 mr-2 ">
                <h5>Macroni 20 gm</h5>
                {/* <h2><input className="inl" type="number"></input></h2> */}
            </Row>
        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={pizza} thumbnail fluid />
              </Row>
              <Row className="justify-content-center mb-2 mr-2 ">
                <h5>Macroni</h5>
                {/* <h2><input className="inl" type="number"></input></h2> */}
            </Row>
        </Col>

        <Col xs={12} md={3}>
            <Row className="justify-content-center mb-2 mr-2 ">
            <Link to="/ingredient">
                <button className="btn btn-dark expand margin"> see all </button> 
            </Link>
            </Row>
        </Col>

        </Row>
        </Container>

        
      </div>
    </div>
  );
};

export default Ingredients;