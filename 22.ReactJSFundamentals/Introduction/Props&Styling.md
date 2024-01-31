# Default Props -

Components can specify default values for missing props

### Demo: Hello-3
_demo/hello-3/Hello.js_
```js
function Hello(props) {
  return <p>Hi {props.to} from {props.from}</p>;
}

Hello.defaultProps = {
  from: "Joel"
};
```

Set properties on element; get using ***props.propName***.

_demo/hello-3/index.js_
```js
ReactDOM.render(
  <div>
    <Hello to="Students" from="Elie" />
    <Hello to="World" />
  </div>,
  document.getElementById("root")
);
```

## Styling React:

You can add CSS classes in JSX.

However: since ***class*** is a reserved keyword in JS, spell it ***className*** in JSX:
```js
function Message() {
  return <div className="urgent">Emergency!</div>
}
```

You can inline CSS styles, but now ***style*** takes a JS object:
```js
function Box(props) {
  const colors = {
    color: props.favoriteColor,
    backgroundColor: props.otherColor,
  };

  return <b style={colors}>{props.message}</b>;
}
```

## Debugging React:

Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)