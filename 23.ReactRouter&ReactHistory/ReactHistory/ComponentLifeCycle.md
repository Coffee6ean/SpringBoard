# Component Lifecycle -

### What about *useEffect*?
With class components, how do we do things like:

- Make an AJAX request when the page loads?
- Sync data to local storage on any state change?
- Create / clear timers?

### Component Lifecycle
We’ve seen that class components expect certain instance methods (e.g. ***render***).

React also provides other methods you can use to run code at other points before or after rendering.

These methods make up what’s known as the *component lifecycle*.

### Common Methods
- **constructor**: Runs when the component first tries to mount
- **render**: Renders the component
- **componentDidMount**: Runs after the first render *only*. Great for fetching data.
- **componentDidUpdate**: Runs after the component is updated. Does *not* run after the first render. Good place to optionally fetch data, sync to ***localStorage***, etc.
- **componentWillUnmount**: Runs before the component is set to be removed from the DOM. Good place to clean up timers or cancel network requests.

[Full list of lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

### Can I Use These Methods?
Not with function components, no.

They come from the base ***Component*** class that every class component extends from.

But with ***useEffect***, you don’t need these lifecycle methods!

## Challenges with React:

### To summarize
- Moved from createClass to ES2015 classes
- Defining state as an instance property or in the constructor
- Defining default props as a class property
- Using the keywords ***this*** and the ***bind*** function
- Newer features to JS made this a bit quicker, but still a bit of work
- Lots of lifecycle methods!

### Challenges with React
- As React grew in popularity and large companies starting adapting it, a few problems emerged
- We’re going to cover the main two
    - Repeating code and logic in the lifecycle of a component
    - Sharing logic among components

### Repeating code and logic in the lifecycle
Imagine we have a component that fetches todos:

```jsx
class TodoList extends React.Component {

  async componentDidMount() {
    const id = this.props.todoId
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`);

    this.setState({ todo: response.data });
  };

  async componentDidUpdate(prevProps) {
    // if we received a new todo, we need to fetch its data
    if (prevProps.todoId !== this.props.todoId) {
      const id = this.props.todoId;
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/todos/${id}`);

      this.setState({ todo: response.data });
    }
  };

}
```

Can you spot the duplication?

Let’s see another example!

```jsx
class GameBoard extends React.Component {

  componentDidMount() {
    // adding a global click handler
    // not one tied to a specific component
    window.addEventListener("click", this.handleWindowClick);
  };

  componentWillUnmount() {
    // cleaning up our event handler
    window.removeEventListener("click", this.handleWindowClick);
  };

}
```

### Sharing logic among components
Imagine we have multiple components using the todos API or event listener logic.

How would we share this logic?

This has always been one of the biggest challenges with React. Let’s see what options have been considered.
