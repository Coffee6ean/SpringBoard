import React from "react";
import {useParams} from "react-router-dom";
import BaseGreetings from "./BaseGreetings";

function Contact() {
    const val = 'Contact'
    return (
        <div>
            <BaseGreetings name={val}/>
        </div>
    );
}

export default Contact;
