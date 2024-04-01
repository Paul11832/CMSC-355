
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Librarary = () => {
    return (
        <div>
            <h1>Library</h1>
            <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Home">Home</Link>
                </li>
        </div>
    );
};
 
export default Librarary;
