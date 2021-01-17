import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";


function Profile() {
    return(
    <div>
        <div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h1>This is Profile page. version 1.2 will have this function working</h1>
            <Link to="/home">
                <button className="btn btn-dark expand margin"> Go to Home </button> 
            </Link>
        </div>
    </div>
);

};

export default Profile;