import React, {useContext} from "react";
import CountContext from "./CountContext";

function GreatGreatGrandChild() {
    const {count, increment} = useContext(CountContext);
    return (
        <div style={{border:'4px solid yellowgreen', margin:'1rem'}}>
            <p>I'm the great-great-grandchild!</p>
            <p>I also consume count: {count}</p>
            <button onClick={increment}>Increment Count</button>
        </div>
    );
}

export default GreatGreatGrandChild;
