import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyNavbar from "../pages/navbar/navbar";


function Profile() {
    return(
    <div>
        <div >
            <MyNavbar />
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h1>hello</h1>
            <Link to="/home">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link>
        </div>
    </div>
);

};

export default Profile;