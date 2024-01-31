# Conditionals in JSX -

A function component can return either:
- a **single valid** DOM object (`return <div>...</div>`)
- an array of DOM objects (but don’t do this yet!)
- ***null*** (***undefined*** is not ok!)

You can put whatever logic you want in your function for this:
```js
function Lottery(props) {
  if (props.winner)
    return <b>You win!</b>;
  else
    return <b>You lose!</b>;
}
```

### Ternary
It’s very common to use ternary operators:
```js
function Lottery(props) {
  return (
    <b>You {props.winner ? "win" : "lose"}!</b>
  )
}
```

### Demo: Slots!
_demo/slots/Machine.js_
```js
function Machine(props) {
  const { s1, s2, s3 } = props;
  const winner = s1 === s2 && s2 === s3;

  return (
    <div className="Machine">
      <b>{s1}</b> <b>{s2}</b> <b>{s3}</b>
      <p>You {winner ? "win!" : "lose!"}</p>
    </div>
  );
}
```

_demo/slots/index.js_
```js
ReactDOM.render(
  <Machine s1="🍇" s2="🍇" s3="🍇" />,
  document.getElementById("root")
);
```

## Looping in JSX:

It’s common to use ***array.map(fn)*** to output loops in JSX:
```js
function Messages() {
  const msgs = [
    {id: 1, text: "Greetings!"},
    {id: 2, text: "Goodbye!"},
  ];

  return (
    <ul>
      { msgs.map(m => <li>{m.text}</li>) }
    </ul>
  );
}
```

### Demo: Friends!
_demo/friends/Friend.js_
```js
function Friend(props) {
  const { name, hobbies } = props;
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}
```

_demo/friends/index.js_
```js
ReactDOM.render(
  <div>
    <Friend name="Jessica" hobbies={["Tea", "Frisbee"]} />
    <Friend name="Jake" hobbies={["Chess", "Cats"]} />
  </div>,
  document.getElementById("root")
);
```

<aside>
⚠️ **Warnings about key props**

If you look in the console, you’ll see that React is mad at you for not adding something called a “key” prop when you map over an array and render components. You don’t need to worry about this for now; later on, we’ll talk more about what’s happening here.

</aside>
