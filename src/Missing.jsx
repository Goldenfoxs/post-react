import React from "react";
import { Link } from "react-router-dom";

function Missing({}) {
    return(
        <div className="Missing">
            <h1>Page don't find</h1>
            <p>This is the home page of our React application.</p>
            <Link to="/">Go back to the Home</Link>
        </div>
    ) 
};


export default Missing;