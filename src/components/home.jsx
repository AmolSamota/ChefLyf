import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return(
    <div>
        <div className="home">
            <h1 className="d">Welcome to ChefLyf</h1>
            {/* <Link to="/recipe">
                <button className="btn btn-dark expand margin">visit recipe</button> 
            </Link> */}
        </div>
    </div>
);

};

export default Home;