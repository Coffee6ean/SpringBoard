import React from "react";
import GrandChild from "./GrandChild";

function Child() {
    return (
        <div style={{border:'4px solid #0074D9', margin:'1rem', width:'500px'}}>
            <p>I'm the child!</p>
            <GrandChild/>
        </div>
    );
}

export default Child;
