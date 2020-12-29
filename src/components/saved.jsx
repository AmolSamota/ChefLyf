import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyNavbar from "../pages/navbar/navbar";


function Save() {
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
            <h1>wlcm to saved pages</h1>
            <Link to="/home">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link>
        </div>
    </div>
);

};

export default Save;