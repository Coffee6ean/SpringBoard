import React, { useState } from "react";
import BaseGreetings from "./BaseGreetings";
import { useNavigate } from "react-router-dom";

function Contact() {
    const val = 'Contact';
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    console.log(navigate);

    function handleChange(e) {
        setEmail(e.target.value);
    }

    function storeEmail() {
        alert('No email storage');
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        storeEmail(email);
        navigate('/');
    }

    return (
        <div>
            <BaseGreetings name={val}/>
            <p>To get in touch, enter email.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
