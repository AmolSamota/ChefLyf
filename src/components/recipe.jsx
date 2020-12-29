import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyNavbar from "../pages/navbar/navbar";
import Container from "react-bootstrap/Container";
import MyCarousal from "../pages/carousal/carousal";
import About from "../pages/phase1/recepie";
import Ingredients from "../pages/ingredients/ingredients";
import CookingSteps from "../pages/steps/steps";


function Recipe() {
    return(
    <div>
        

        <MyNavbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


            welcome to recipe page
        <Container>
            <About />
        </Container>
        <hr />
        <Ingredients />
        <hr />
        <CookingSteps />
        <hr />
        
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/profile">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link>
        </div>
    </div>
);

};

export default Recipe;