import React from "react";
import CounterWrapper from "./CounterWrapper";

class CounterRenderProps extends React.Component {
    render() {
        return (
            <CounterWrapper
                render={obj => (
                    <div>
                        <div>Current count: {obj.count}</div>
                        <div>
                            <button onClick={obj.decrement}>-</button>
                            <button onClick={obj.increment}>+</button>
                        </div>
                    </div>
                )}
            />
        );
    }
}

export default CounterRenderProps;
