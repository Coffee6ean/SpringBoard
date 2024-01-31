# JSX (JavaScript Syntax Extension) -

_demo/hello/index.js_
```jsx
function Hello() {
  return <p>Hi Rithm!</p>
}

ReactDOM.render(<Hello/>,
  document.getElementById("root"));
```

What’s this HTML in our JavaScript?

JSX is like HTML embedded in JavaScript:
```jsx
if (score > 100) {
  return <b>You win!</b>
}
```

You can also “re-embed” JavaScript in JSX:
```jsx
if (score > 100) {
  return <b>You win, { playerName }</b>
}
```
(looks for JavaScript variable playerName)

### Using JSX
- JSX isn’t legal JavaScript
    - It has to be “transpiled” to JavaScript
- You can do this with [Babel](https://babeljs.io/)

### Transpiling JSX in Browser
- Easy for getting started — nothing to install!
- Load ***Babel*** standalone library:
```html
<script src="https://unpkg.com/babel-standalone"></script>
```

- Mark JSX files with `type="text/jsx"`:
```html
<script src="index.js" type="text/jsx"></script>
```

- Read handouts to learn how to do on command line

<aside>
💡 **Use Babel on Command Line**

While it’s convenient to transpile JSX into JavaScript directly in the browser like this, it’s not suitable for real-world deployment: it takes a second to do the conversion, leading to a poor experience for users.

Better for deployment is to convert JSX to JavaScript once, via the command line, and then save and use the converted JS directly.

To do this:
1. You need to install [npm](http://npmjs.com/)
2. Then use ***npm*** to install Babel and settings for React:
```bash
$ npm install @babel/core @babel/cli @babel/preset-react
```

1. To convert a file:
```bash
$ node_modules/@babel/cli/bin/babel.js --presets @babel/react
     file.jsx > file.js
```

</aside>

### Serving Demo
For security reasons, Babel won’t work with ***file://*** scripts

Run files under a simple static server:
```bash
$ python3 -m http.server
```

Then can visit at *http://localhost:8000/yourfile.html*

### JSX Rules
JSX is more strict than HTML — elements must either:
- Have an explicit closing tag: `<b> ... </b>`
- Be explicitly self-closed: `<input name="msg" />`
    - Cannot leave off that `/` or will get syntax error

### What JSX looks like when transpiled

[Let’s take a look!](https://babeljs.io/repl)
