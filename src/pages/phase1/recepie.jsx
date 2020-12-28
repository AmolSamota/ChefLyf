import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCarousal from "../carousal/carousal";
import "./recepie.css";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import pizza from "../../assests/recepies/download.jfif";
import pasta from "../../assests/recepies/pasta-min.jpg";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll/scrol";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3"></h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            
            <Col xs={12} md={6}>
               
               <br></br><br></br>
              <Row className="justify-content-center mb-2 mr-2 ">
            
                <MyCarousal />
              </Row>
              <Row>
              <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                      <div className="like" > <BiLike /> Like&nbsp;&nbsp;</div>
                      </Button>
                    </a>
                  </div>


                  <div>
                    <a href="https://drive.google.com/file/d/1LofzqwNISqAK6cBSLHWLEBy7ZCcESmh6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                      <div className="like" > <FaRegComment /> Comment&nbsp;&nbsp;</div>
                      </Button>
                    </a>
                  </div>


                  <div>
                    <a href="https://github.com/AmolSamota" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                      <div className="like" > <FiShare2 /> Share&nbsp;&nbsp;</div>
                      </Button>
                    </a>
                  </div>
      
                </Col>
              </Row>

            </Col>

            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <h1>Recipe name</h1>
                <h1>Recipe Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sapiente dolore delectus 
                  incidunt culpa corrupti eius consectetur ea nam doloribus vel iure totam perferendis 
                  iusto laboriosam quo nisi necessitatibus. Iusto.</p>
              </Row>
            </Col>


          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;