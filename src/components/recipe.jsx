import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import About from "../pages/phase1/recepie";
import Ingredients from "../pages/ingredients/ingredients";
import CookingSteps from "../pages/steps/steps";
import Comment from "../pages/comments/comments";
import "./recipe.css";


function Recipe() {
    return(
    <div className="recipe">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>This is a recipe page</h1>
        
        <Container>
            <About />
        </Container>
        <hr />
        <Ingredients />
        <hr />
        <CookingSteps />
        <hr />
        <Comment />
        <hr />
        
        <div >
            {/* <Link to="/home">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link> */}
        </div>
    </div>
);

};

export default Recipe;