// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
 
const Home = () => {
    const name = localStorage.getItem("Username");
    console.log(name);
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome Paul</h2>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/Lunch">Lunch</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/Grades">Grades</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/Librarary">Librarary</Link>
                </li>
            </ul>
        </div>
    );
};
 
export default Home;
