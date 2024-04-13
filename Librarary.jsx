
import React, { useState } from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
 
const Librarary = () => {
    const [currmoney,holdMoney] = useState(120)
    const [money,getMoney] = useState('')
    const deductMoney = () =>{
        if(currmoney > 0 && money <= currmoney){
       holdMoney(currmoney - money)
        }
    }
    return (
        <div>
            <h1>Library</h1>
            <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Home">Home</Link>
                </li>
                <h2> ${currmoney} </h2> <br></br>
                BOOKS STILL OUT
                <li>
                    To Kill a Mocking Bird ($40)
                </li>
                <li>
                    1984 ($40)
                </li>
                <li>
                    Magic Tree House ($40)
                </li>
                <label htmlFor="Amount input">$:</label>
                <input type={'text'} 
                id={'text'} 
                name={'text'}
                onChange={event =>{
                    getMoney(event.target.value)
                }} />
                 <button onClick={() => deductMoney()}>Pay</button>
        </div>
    );
};
 
export default Librarary;
