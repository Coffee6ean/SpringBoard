import React from "react";
import {useParams} from "react-router-dom";
import BaseGreetings from "./BaseGreetings";

function About() {
    const val = 'About';
    return (
        <div>
            <BaseGreetings name={val}/>
        </div>
    );
}

export default About;
