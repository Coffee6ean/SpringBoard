import React from "react";
import {useParams} from "react-router-dom";
import BaseGreetings from "./BaseGreetings";

function Home() {
    const val = 'Home';
    return(
        <div>
            <BaseGreetings name={val}/>
        </div>
    );
}

export default Home;
