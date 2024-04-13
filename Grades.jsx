
 
import React, { useState } from "react";
import { Link } from "react-router-dom";
 
const Grades = () => {
    const [g1IsOpen,setg1IsOpen] = useState(false);
    const [g2IsOpen,setg2IsOpen] = useState(false);
    const [g3IsOpen,setg3IsOpen] = useState(false);
    const [g4IsOpen,setg4IsOpen] = useState(false);
    const [g5IsOpen,setg5IsOpen] = useState(false);
    return (
        <div>
            <h1>Grades</h1>
            <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/Home">Home</Link>
                </li>
                <div>
                    Course 1: Mathmatics: A 
                    <button onClick={() => setg1IsOpen(true)}>
                        Description
                    </button>
                    {g1IsOpen && (
                        <div>
                            <div>
                               CRN 47312: <br></br>
                               This class utilizes intro to precalc ideas. It focuses on learning derivation and integration <br></br>
                               in a real world context!
                                </div>
                                <button onClick={() => setg1IsOpen(false)}>
                                    Close
                                </button>
                                </div>
                    )}
                </div>
                <div>
                    Course 2: Science: A
                    <button onClick={() => setg2IsOpen(true)}>
                        Description
                    </button>
                    {g2IsOpen && (
                        <div>
                            <div>
                                CRN 98347: <br></br>
                                This class delves deep into the ideas of the Krebs cycle and Meiosis. <br></br>
                                Students who wish to register for this class must have a breadth of knowledge in basic biology.
                                </div>
                                <button onClick={() => setg2IsOpen(false)}>
                                    Close
                                </button>
                                </div>
                    )}
                </div>
                <div>
                    Course 3: Music: A
                    <button onClick={() => setg3IsOpen(true)}>
                        Description
                    </button>
                    {g3IsOpen && (
                        <div>
                            <div>
                                CRN 84713: <br></br>
                                This class builds off of previouse music classes the student has taken.<br></br>
                                It will go into depth on music theory as well as playing a concert at the end of the year.
                                </div>
                                <button onClick={() => setg3IsOpen(false)}>
                                    Close
                                </button>
                                </div>
                    )}
                </div>
                <div>
                    Course 4: Reading: B
                    <button onClick={() => setg4IsOpen(true)}>
                        Description
                    </button>
                    {g4IsOpen && (
                        <div>
                            <div>
                                CRN 56218: <br></br>
                                This class will go into the literature of banned books list. It will build off of <br></br>
                                dystopian type concets that are crucial to the good nature of society.
                                </div>
                                <button onClick={() => setg4IsOpen(false)}>
                                    Close
                                </button>
                                </div>
                    )}
                </div>
                <div>
                    Course 5: History: A
                    <button onClick={() => setg5IsOpen(true)}>
                        Description
                    </button>
                    {g5IsOpen && (
                        <div>
                            <div>
                                CRN 38124: <br></br>
                                This class will look at all background of American US history. <br></br>
                                Students should have a good background into American culture and how it operates.
                                </div>
                                <button onClick={() => setg5IsOpen(false)}>
                                    Close
                                </button>
                                </div>
                    )}
                </div>
                
        </div>
    );
};
 
export default Grades;
