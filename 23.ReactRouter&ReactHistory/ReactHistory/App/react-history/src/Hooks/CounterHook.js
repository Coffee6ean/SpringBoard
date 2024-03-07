import React from "react";
import useCounter from "./useCounter";

const CounterHook = () => {
    const [count, inc, dec] = useCounter();

    return(
        <div>
            <h3>Count is: {count}</h3>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    );
}

export default CounterHook;
