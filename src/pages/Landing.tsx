import React from "react";
import { Link } from "react-router-dom";

function Landing () {
    return (
        <div id='main-buttons-container'>
            <Link to='/login'>
                <h1>Login!</h1>
            </Link>
        </div>
    );
}

export default Landing;