import React from "react";
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
