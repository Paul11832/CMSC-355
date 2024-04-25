// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Calendar from "react-calendar";

const Home = () => {
    const name = localStorage.getItem("Username");
    const [items, setItems] = useState([]);
    const [data,setData] = useState([]);
    const[day,setDay]= useState(false);
    const[month,setMonth]= useState(false);
    useEffect(() => {
  localStorage.setItem(120, JSON.stringify(items));
}, [items]);
const handleEvent1 = () =>{
    setDay(true);
}
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome Paul</h2>
            <br />
            <ul>
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
            <Calendar
            onChange={setData}
            selectRange = {true}
            defaultValue={data}
            onClickDay={() =>setDay(!day)}
            onClickMonth={() =>setMonth(!month)}
            ></Calendar>
            {day && ( 
                <div>
                    <li>Classes end Tuesday April 30th!</li>
                    <li>Final exam will be help May 2nd</li>
                    <li>All grades are due May 6th</li>
                    </div>
            )}
            {month && ( 
                <div>
                    <li>Welcome to April!</li>
                    <li>Last month is upon us!</li>
                    <li>Next month is finals season </li>
                    </div>
            )}
        </div>
    );
};
 
export default Home;
