import React from "react";

function GreatGrandChild({count, addProp}) {
    return (
        <div style={{border:'4px solid #7FDBFF', margin:'1rem'}}>
            <p>I'm the great-grandchild!</p>
            <p>Count is: {count}</p>
            <button onClick={addProp}>Increment Count</button>
        </div>
    );
}

export default GreatGrandChild;
