import React, { Component } from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, isHiding: false}
    }

    render() {
        const {color} = this.props;
        const {count} = this.state;

        return (
            <div>
                <h1 style={{color}}>I am Counter</h1>
                <h3>Count Is: {count}</h3>
                <button onClick={() => this.setState({count: count + 1})}>Add 1</button>
                <button onClick={() => this.setState({count: count - 1})}>Subtract 1</button>
            </div>
        );
    }
}

export default Counter;
