import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Profile() {
    return(
    <div>
        <div >

            <h1>hello</h1>
            <Link to="/home">
                <button className="btn btn-dark expand margin"> Home </button> 
            </Link>
        </div>
    </div>
);

};

export default Profile;