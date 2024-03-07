import React from "react";
import CountMixin from "./CountMixin";
import createReactClass from 'create-react-class';

const CounterMixin = createReactClass({
    mixins: [CountMixin],
    render: function() {
        return (
            <div>
                <div>Current count: {this.state.count}</div>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
});

export default CounterMixin;
