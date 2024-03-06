import React from "react";
import BaseGreetings from "./BaseGreetings";

function Home() {
    const val = 'Home';
    return(
        <div>
            <BaseGreetings name={val}/>
            <span><b>Welcome to the site!</b></span>
            <p>Click on links above to explore</p>
        </div>
    );
}

export default Home;
