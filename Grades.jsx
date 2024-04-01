// App.jsx
 
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Grades = () => {
    return (
        <div>
            <h1>Grades</h1>
            <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Home">Home</Link>
                </li>
        </div>
    );
};
 
export default Grades;
