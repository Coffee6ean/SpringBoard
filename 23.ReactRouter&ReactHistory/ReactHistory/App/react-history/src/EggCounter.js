import React from "react";
import CountMixin from "./CountMixin";
import createReactClass from 'create-react-class';

const EggCounter = createReactClass({
    mixins: [CountMixin],
    render: function() {
        return (
            <div>
                <h1>{'🥚'.repeat(this.state.count)}</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
});

export default EggCounter;
