import React from "react";
import BaseGreetings from "./BaseGreetings";

function About() {
    const val = 'About';
    return (
        <div>
            <BaseGreetings name={val}/>
            <span><b>This is the about page.</b></span>
        </div>  
    );
}

export default About;
