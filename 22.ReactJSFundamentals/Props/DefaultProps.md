# Default Props -

Components can specify default values for missing props

### Demo: message-app
_demo/message-app/Message.js_
```jsx
const Message = ({ from = "Marissa", messageText }) => {
  return (
    <p>
      {from} says {messageText}
    </p>
  );
};
```

Set properties on element; get using ***propName***.

_demo/message-app/App.js_
```jsx
const App = () => (
  <div>
    <Message messageText="🙋" from="Lana" />
    <Message messageText="💙💙" />
  </div>
);

ReactDOM.render(<App />, 
  document.getElementById("root"));
```

Let’s take another look at this:
```jsx
const Message = ({ from = "Marissa", messageText }) => {
  return (
    <p>
      {from} says {messageText}
    </p>
  );
};
```

We’re destructuring the ***from*** and ***messageText*** keys from ***props*** and setting a default value for ***from*** to “Marissa”.

It’s extremely common to see destructuring from props and other functions in React.

If you’re not sure about what this code is doing, check out the Modern JS course to learn about destructuring!

## Props.children:

- Some components don’t know their children (containing data) ahead of time.
- React provides a special children prop to pass children elements directly to a parent component

### An example
_demo/props-children/CustomGreeting.js_
```jsx
const CustomGreeting = ({message, children}) => (
  <div>
    <h2>{message}</h2>
    {children}
  </div>
)
```

_demo/props-children/App.js_
```jsx
const App = () => (
  <div>
    <CustomGreeting message={"Hello!"}>
      <button>Confirm Greeting</button>
    </CustomGreeting>

    <CustomGreeting message={"Nothing else here!"} />

    <CustomGreeting message={"Lets say nice things!"}>
      Inside this greeting we will give you a compliment
      <ul>
        <li>You are kind!</li>
      </ul>
    </CustomGreeting>
  </div>
);

ReactDOM.render(<App />, 
  document.getElementById("root"));
```

### Where do you see this?
- UI libraries like Reactstrap and Material UI
- When you don’t know what the children will be when defining a component
