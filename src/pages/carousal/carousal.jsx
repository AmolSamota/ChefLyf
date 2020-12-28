import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pav from "../../assests/recepies/pizza1.jpg";
import pasta from "../../assests/recepies/pav1.jpg";
import ScrollDown from "../scroll/scrol";
import "./carousal.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={true} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={pav} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={pasta} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;