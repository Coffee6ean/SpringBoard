# React: JSX and Props -

## Properties:

**aka. Props**

A useful component is a reusable one.

This often means making it configurable or customizable.

```jsx
const Order = (props) => {
  return (
    <div>
      <p>Your Order: </p>
      <p>I'd like coffee from Starbucks</p>
    </div>
  );
}
```

It would be better if we could *configure* our order.

Our order will be *I’d like ______ from ______*.

Let’s make two “properties”:
- **item**: What we would like
- **restaurant**: Where we are getting it from

### Demo: Delivery-app
Let’s add some props to this element.

***props*** is an object that is defined for each component

_demo/delivery-app/Order.js_
```jsx
const Order = (props) => {
  return (
    <div>
      <p>Your Order: </p>
      <p>I'd like {props.item} from {props.restaurant}</p>
    </div>
  );
}
```

We don’t know what these values are yet, so let’s see how to pass in props!

### Using the component
_demo/delivery-app/App.js_
```jsx
const App = () => (
  <div>
    <Order item="pizza" restaurant="Dominos" />
    <Order item="bread" restaurant="Panera" />
  </div>
);

ReactDOM.render(<App/>,
  document.getElementById("root"));
```

Notice here, that we’re passing in values for what the props will be.

The keys are separated using a ***=*** followed by the value.

You can either pass in props when you render the component or as default values which we will see soon!

<aside>
💡 **Rendering Multiple Top-Level Elements**

Prior to React 16, every component had to render a single top-level element. In newer versions of React, it’s possible to render siblings at the top level, but the syntax isn’t quite as clean. You’re welcome to look into this if you’re curious, but all of our Component files will render a single element at the top of their hierarchy.

</aside>

### Properties Requirements
- Properties are for *configuring* your component
- Properties are immutable
- Properties can be strings:
```jsx
<Employee name="Marcia" title="CTO" />
```

- For other types, embed JS expression using the curly braces:
```jsx
<Employee name="Amanda" salary={ 170000 }
    hobbies={ ["running", "swimming", "gardening"] } />
```

### Using Properties
- Get to properties inside class with ***propertyName***
- Properties are immutable — cannot change!
