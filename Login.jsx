// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import {useState } from "react";
//import { Link } from "react-router-dom";
import {Route, Link, Routes, useParams} from 'react-router-dom';

function Login() {
    var params = useParams();
    console.log(params);
  
    return(
    <>
     <div className="App">
            <h1>Login Page</h1>
            <form>
                <label htmlFor="Student Name">Student Name:</label>
                <input type="text" id="Student Name" name="Student Name" />
                <label htmlFor="Student ID">Student ID:</label>
                <input type="password" id="password" name="password"  />

                <button type="submit">Login</button>
                <ul>
        <li>
        {/* Endpoint to route to Home component */}
        <Link to="/Home">Home</Link>
    </li>
    </ul>
            </form>
        </div>
           </>
    );
};
export default Login;
