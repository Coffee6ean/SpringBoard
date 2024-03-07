import React from "react";
import GreatGrandChild from "./GreatGrandChild";

function GrandChild({count, addProp}) {
    return (
        <div style={{border:'4px solid #39CCCC', margin:'1rem'}}>
            <p>I'm the grandchild!</p>
            <GreatGrandChild count={count} addProp={addProp}/>
        </div>
    );
}

export default GrandChild;
