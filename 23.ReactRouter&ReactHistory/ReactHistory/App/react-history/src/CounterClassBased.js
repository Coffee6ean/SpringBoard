import React from "react";

class CounterClassBased extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, isHiding: false}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log(this);
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        console.log(this);
        this.setState({count: this.state.count - 1});
    }

    componentDidMount() {
        console.log('Component Mounted');
    }

    componentDidUpdate() {
        console.log('Component Updated');
    }

    render() {
        const {color} = this.props;
        const {count} = this.state;
        return (
            <div>
                <h1 style={{color}}>I am Counter</h1>
                <h3>Count Is: {count}</h3>
                <button onClick={this.increment}>Add 1</button>
                <button onClick={this.decrement}>Subtract 1</button>
            </div>
        );
    }
}

export default CounterClassBased;
