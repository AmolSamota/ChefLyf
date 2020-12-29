import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
    return(
    <div>
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

export default Home;