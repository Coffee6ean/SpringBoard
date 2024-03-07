import React, {useState} from "react";
import GrandChild from "./GrandChild";
import CountContext from "./CountContext";

function Child() {
    const [count, setCount] = useState(0);
    const addToCount = () => {
        setCount(count => count + 1);
    }
    return (
        <CountContext.Provider value={count}>
            <div style={{border:'4px solid #0074D9', margin:'1rem', width:'500px'}}>
                <p>I'm the child!</p>
                <p>I 'own' count. It is: {count}</p>
                <button onClick={addToCount}>Add to Count</button>
                <GrandChild/>
            </div>
        </CountContext.Provider>
    );
}

export default Child;
