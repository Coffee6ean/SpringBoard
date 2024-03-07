import React from "react";
import withCounter from "./withCounter";

const CounterUsingHOC = (props) => {
    <div style={{color: props.color}}>
        <div>Current count: {props.count}</div>
        <div>
            <button onClick={props.onDecrease}>-</button>
            <button onClick={props.onIncrease}>+</button>
        </div>
    </div>
}

export default withCounter(CounterUsingHOC);
