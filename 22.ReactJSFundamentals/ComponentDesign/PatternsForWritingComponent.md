# Patterns for Writing Components

### Destructuring Props
As with any other function, we can destructure arguments in our function components.

This is frequently used to destructure props.

_what we’ve been doing:_
```jsx
function Dice(props) {
  // we can reference props via
  // props.title, props.numDice, props.maxVal
}
```

_what we can do:_
```jsx
function Dice({ title, numDice, maxVal }) {
  // we can reference props via
  // title, numDice, maxVal
}
```

This often cleans up the code inside of our component.

### Setting Default Props
When we destructure props in our component, we can also provide defaults!

This is a nice replacement for ***defaultProps***

_what we’ve been doing:_
```jsx
function Dice(props) {
  // ... lots missing
}

Dice.defaultProps = {
  title: "Main Game",
  numDice: 6,
  maxVal: 20
};
```

_what we can do:_
```jsx
function Dice({
  title = "Main Game",
  numDice = 6,
  maxVal = 20
}) {
  // ... lots missing
}
```

### Arrow Functions
Components are just functions. So we can write them with arrow syntax if we choose.

If the component immediately renders, you can make use of an arrow function’s implicit return.

_what we’ve been doing:_
```jsx
function Die(props) {
  return (
    <div className="Die">
```

_what we can do:_
```jsx
const Die = ({ value }) => (
  <div className="Die">{value}</div>
);
```

*Should I use arrow functions for my components?*

Not necessarily. But you’ll see them used frequently when looking at documentation, code examples, etc.

Just be consistent!
