import React, {useState} from "react";
import GrandChild from "./GrandChild";

function Child() {
    const [count, setCount] = useState(0);
    const addToCount = () => {
        setCount(count => count + 1);
    }
    return (
        <div style={{border:'4px solid #0074D9', margin:'1rem', width:'500px'}}>
            <p>I'm the child!</p>
            <p>I 'own' count. It is: {count}</p>
            <GrandChild count={count} addProp={addToCount}/>
        </div>
    );
}

export default Child;
