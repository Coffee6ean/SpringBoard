# Sharing Code Across Components - A History -

### Mixins: A first attempt
For a time, React supported the idea of mixins.

Mixins allowed you to share the business logic for manipulating state across several components.

### Mixin Example
_demo/react-history-app/src/CounterMixin.js_
```jsx
import React from "react";
import createReactClass from "create-react-class";

const CountMixin = {
  getInitialState: function() {
    return {
      count: 0
    };
  },
  increment: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  decrement: function() {
    this.setState({
      count: this.state.count - 1
    });
  }
};
```

_demo/react-history-app/src/CounterMixin.js_
```jsx
const CounterMixin = createReactClass({
  mixins: [CountMixin],
  render: function() {
    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <div>
          <button onClick={this.decrement}>
            -
          </button>
          <button onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
});

export default CounterMixin;
```

### Issues with Mixins
Dan Abramov wrote about some problems with mixins in 2016. Some highlights:

- Mixins cause snowballing complexity (i.e. they tend to get bloated over time)
- Mixins introduce implicit dependencies (i.e. the component may be dependent upon something in the mixin, or vice versa)
    - This also makes them more difficult to debug
- Mixins force different components to use the same naming conventions. This makes it more difficult to change the names of pieces of state, method names, etc.

If you’re curious:

https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html

https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750

### Higher Order Components - Another option
The second idea the React dev-team came up with revolved around *higher order functions*. Let’s recap what we mean by that.

Imagine we have the following two functions

```jsx
function addAndLog(x, y) {
  let result = x + y;
  console.log('result:', result);
  return result;
}

function multiplyAndLog(x, y) {
  let result = x * y;
  console.log('result:', result);
  return result;
}
```

Notice the duplication with the console.log. How can we clean this up?

A bit of function composition! We’ll make a function that accepts another function and returns a new function with the logging included!

```jsx
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function withLogging(wrappedFunction) {
  return function(x, y) {
    let result = wrappedFunction(x, y);
    console.log('result:', result);
    return result;
  };
}
```

Here’s how we would use it:

```jsx
// Equivalent to writing addAndLog by hand:
const addAndLog = withLogging(add);

// Equivalent to writing multiplyAndLog by hand:
const multiplyAndLog = withLogging(multiply);
```

Now let’s see how we can use this pattern in React!

### Higher Order Components: A valiant second pass
_demo/react-history-app/src/withCounter.js_
```jsx
const withCounter = Component => {
  return class extends React.Component {
    state = {
      count: 0
    };

    handleDecrement = () => {
      this.setState({count: this.state.count - 1});
    };

    handleIncrement = () => {
      this.setState({count: this.state.count + 1});
    };

    render() {
      return (
        <Component
          {...this.props}
          count={this.state.count}
          onIncrease={this.handleIncrement}
          onDecrease={this.handleDecrement}
        />
      );
    }
  };
};
```

_demo/react-history-app/src/CounterUsingHOC.js_
```jsx
import React from "react";
import withCounter from "./withCounter";

const Counter = props => (
  <div>
    <div>Current count: {props.count}</div>
    <div>
      <button onClick={props.onDecrease}>-</button>
      <button onClick={props.onIncrease}>+</button>
    </div>
  </div>
);

export default withCounter(Counter);
```

Unfortunately, HOCs still had some issues.

- Combining multiple HOCs can quickly get confusing
- They are not very customizable once defined

Another pattern, called *render props*, was introduced!

If you’d like to learn more, you can read here - https://gist.github.com/heygrady/f9bf3b6dd93fe3d87ba87430fd3c20d5

### Render Props: Another Option?
_demo/react-history-app/src/CounterRenderProps.js_
```jsx
class Wrapper extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: this.state.count
        })}
      </div>
    );
  }
}
```

_demo/react-history-app/src/CounterRenderProps.js_
```jsx
class CounterRenderProps extends React.Component {
  render() {
    return (
      <Wrapper
        render={obj => (
          <div>
            <div>Current count: {obj.count}</div>
            <div>
              <button onClick={obj.decrement}>
                -
              </button>
              <button onClick={obj.increment}>
                +
              </button>
            </div>
          </div>
        )}
      />
    );
  }
}
```

### Issues with HOCs and Render Props
- Really hard to follow the logic!
- HOCs can be difficult to debug when trying to find out where the issue arose
- Render props have a tricky syntax and have similar challenges with debugging
- If we have multiple HOCs it gets pretty hairy and leads to what’s called wrapper hell.
- https://twitter.com/acdlite/status/955955121979969537

### Issues no matter what!
The answer the React team has come up with is to use functions instead of classes. (Read: hooks!)
