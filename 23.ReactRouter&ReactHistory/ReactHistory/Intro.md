# History of React -

## Class Components:

### Early React
It all began with React.createClass in 2013!

```jsx
const Message = React.createClass({
  render() {
    return <h1>Hello World</h1>;
  }
});
```

This is now deprecated, so don’t use it :)

### What happened next
When ES2015 classes were standardized in 2015, React evolved to class-based components:

```jsx
class Message extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

- Every component extends ***React.Component***.
- Class components must have a ***render*** method describing what the component should render.
    - (For function components, this is just the return value.)

### What about state?
With class components we don’t use hooks. Instead, state is initialized in the ***constructor***.

_demo/react-history-app/src/CounterClassBasedInlineArrow.js_
```jsx
class CounterClassBasedInlineArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
```

### Changing state
With class components, state is changed with the instance method ***setState***. This works similarly to the function returned from ***useState***.

_demo/react-history-app/src/CounterClassBasedInlineArrow.js_
```jsx
import React from "react";

class CounterClassBasedInlineArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>Current count: {count}</div>
        <div>
          <button onClick={() => this.setState({ count: count - 1 })}>
            -
          </button>
          <button onClick={() => this.setState({ count: count + 1 })}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClassBasedInlineArrow;
```

### Instance methods and *this*
Instead of writing our event handlers as inline arrow functions, we can also write them as instance methods.

_demo/react-history-app/src/CounterClassBasedBroken.js_
```jsx
class CounterClassBasedBroken extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
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
}
```

Unfortunately, this component is broken.

We’ve lost the ***this*** context!

To fix this problem, we need to method bind our functions in the constructor.

_demo/react-history-app/src/CounterClassBased.js_
```jsx
class CounterClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
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
}
```

### Some challenges
- Quite a bit of code just to declare initial state and set up our handlers
- Have to really understand ***this*** and ***bind*** to get things to work correctly

By opting into experimental syntax, we can simplify things a bit.

### Newer Syntax
_demo/react-history-app/src/CounterClassBasedNewer.js_
```jsx
class CounterClassBasedNewer extends React.Component {
  state = {
    count: 0
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
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
}
```
- This syntax is not officially part of JavaScript (yet!)
- It is not *exactly* equivalent to the syntax in ***CounterClassBased*** (but don’t worry too much about this)
