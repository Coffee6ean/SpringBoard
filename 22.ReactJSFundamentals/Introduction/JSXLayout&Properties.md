# Layout -

Our demo had ***Hello*** component in same ***index.js*** as placement code:
_demo/hello/index.js_
```js
function Hello() {
  return <p>Hi Rithm!</p>
}

ReactDOM.render(<Hello/>,
  document.getElementById("root"));
```

You’ll often have >1 component, it’s good to keep in separate files.

_index.js_
```js
ReactDOM.render(<Hello/>,
  document.getElementById("root"));
```

Convention: 1 component per file, with component name as filename:

### App
It’s conventional for the top-level component to be named ***App***.

This renders the other components:

_App.js_
```js
function App() {
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello to="you" from="me" />
      <Hello to="Paul" from="Ringo" />
    </div>
  );
}
```

- This way, readers of code know where to start
- This is usually the only thing rendered in ***index.js***

### Order of Script Tags
_demo/hello-2/index.html_
```html
<script src=
  "http://unpkg.com/react/umd/react.development.js"></script>
<script src=
  "http://unpkg.com/react-dom/umd/react-dom.development.js">
</script>

<script src="http://unpkg.com/babel-standalone"></script>

<script src="Hello.js" type="text/jsx"></script>
<script src="index.js" type="text/jsx"></script>
```

Make sure any components you need in a file are loaded by a previous ***script*** tag. (We’ll learn about a better way to manage imports soon.)

# Properties -

**aka. Props**

A useful component is a reusable one. This often means making it configurable or customizable.

It would be better if we could *configure* our greeting.

Our greeting will be *Hi ______ from ______*.

Let’s make two “properties”:
-**to**: Who we are greeting
-**from**: Who our greeting is from

### Demo: Hello-2

_demo/hello-2/index.js_
```js
ReactDOM.render(
  <Hello to="me" from="you" />,
  document.getElementById("root")
);
```

Set properties on element; get using ***props.propName***, where ***props*** is the first argument to our component function.

_demo/hello-2/Hello.js_
```js
function Hello(props) {
  return (
    <div>
      <p>Secret Message: </p>
      <p>
        Hi {props.to} from {props.from}
      </p>
    </div>
  );
}
```

### Reusing Component
You can use a component many times:

_index.js_
```js
ReactDOM.render(
  <div>
    <Hello to="Kay" from="Kim" />
    <Hello to="me" from="you" />
  </div>,
  document.getElementById("root")
);
```

Note ***div*** wrapper — JSX often renders a *single top-level element.*

<aside>
💡 **Rendering Multiple Top-Level Elements**

Prior to React 16, every component had to render a single top-level element. In newer versions of React, it’s possible to render siblings at the top level, but the syntax isn’t quite as clean. You’re welcome to look into this if you’re curious, but all of our Component files will render a single element at the top of their hierarchy.

</aside>

### Properties Requirements
- Properties are for *configuring* your component
- Properties are immutable
- Properties can be strings:
```js
<User name="Jane" title="CEO" />
```

- For other types, embed JS expression using the curly braces:
```js
<User name="Jane" salary={ 100000 }
    hobbies={ ["bridge", "reading", "tea"] } />
```

### In Summary
- Get to properties inside function with ***props.propertyName***
- Properties are immutable — cannot change!
