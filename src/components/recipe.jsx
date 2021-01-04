import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import About from "../pages/phase1/recepie";
import Ingredients from "../pages/ingredients/ingredients";
import CookingSteps from "../pages/steps/steps";
import "./recipe.css";


function Recipe() {
    return(
    <div className="recipe">
        <h1>This is recipe page</h1>
        
        <Container>
            <About />
        </Container>
        <Ingredients />
        <CookingSteps />
        
        <div >
            {/* <Link to="/home">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link> */}
        </div>
    </div>
);

};

export default Recipe;