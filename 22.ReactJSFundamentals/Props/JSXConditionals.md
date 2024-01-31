# Conditionals in JSX -

Your functional components can render:

- a **single valid** DOM object (`return <div>...</div>`)
- an array of DOM objects (but don’t do this yet!)
- ***null*** (***undefined*** is not ok!)

You can put whatever logic you want in your function for this:
```jsx
const Lottery = (props) => {
  if (props.winner) {
    return <b>You win!</b>;
  } else {
    return <b>You lose!</b>;
  }
}
```

### Ternary
It’s very common as well to use ternary operators when you have short conditional statements:
```jsx
const Lottery = (props) => {
    return (
      <b>You {props.winner ? "win" : "lose"}!</b>
    )
}
```

### Demo: Slots!
_demo/slots/Machine.js_
```jsx
const Machine = (props) => {
  const winner = props.s1 === props.s2 && props.s2 === props.s3;

  return (
    <div className="Machine">
      <b>{props.s1}</b> 
      <b>{props.s2}</b> 
      <b>{props.s3}</b>
      <p>You {winner ? "win!" : "lose!"}</p>
    </div>
  );
};
```

_demo/slots/App.js_
```jsx
ReactDOM.render(
  <Machine s1="🍇" s2="🍇" s3="🍇" />,
  document.getElementById("root")
);
```
