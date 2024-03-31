// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import {useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";
import {Route, Link, Routes, useParams} from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const[notloggedIn,setLoggedIn] = useState(true);
    const[currUsername,setState] = useState('')
    const[currPassword,setPass] = useState('')
    const preformLogin = () =>{
        if(currUsername === "Paul" && currPassword ==="Pass"){
            setLoggedIn(false)
        navigate('/Home')
        }else{
            
        }
    }
  
    return(
    <>
     <div className="App">
            <h1>Login Page</h1>
            <form onSubmit={preformLogin}>
                <label htmlFor="Student Name">Student Name:</label>
                <input type={'text'} 
                id={'Student Name'} 
                name={'Student Name'}
                onChange={event =>{
                    setState(event.target.value)
                }} />
                <label htmlFor="Student ID">Student ID:</label>
                <input type="password" 
                id="password" 
                name="Student ID"  
                onChange={event =>{
                    setPass(event.target.value)
                }}/>
                <button type="submit">Login</button>
                <span> {"\n"}'You are not logged in'</span>
                <ul>
    </ul>
            </form>
        </div>
           </>
    );
};
export default Login;
