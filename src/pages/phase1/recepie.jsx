import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCarousal from "../carousal/carousal";
import "./recepie.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
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
                    
                      <Button className="m-2">
                      <div className="like" > <AiOutlineHeart />&nbsp;</div>
                      </Button>
                    
                  </div>


                  <div>
                    
                      <Button className="m-2">
                      <div className="like" >< AiOutlineStar />&nbsp;&nbsp;</div>
                      </Button>
                  
                  </div>


                  <div>
                    
                      <Button className="m-2">
                      <div className="like" > <BiComment />&nbsp;&nbsp;</div>
                      </Button>
                    
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