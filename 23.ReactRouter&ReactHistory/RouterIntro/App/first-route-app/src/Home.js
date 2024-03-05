import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Click to go to the <Link to="/hungry">Eat Page</Link></p>
            <h1>I'm Hungry</h1>
            <img src="https://i.giphy.com/pBj0EoGSYjGms.gif" alt="Audry II wants to eat."/>
        </div>
    );
}

export default Home;
