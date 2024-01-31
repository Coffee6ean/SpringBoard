# ReactJS -

## Front End Frameworks:

- Larger js libraries
- Provide “blueprint” for apps
- “Opinionated”
    - “This is how you should design a js app”
- Often: provide for code re-use
- Often: provide templating of HTML (like Jinja)

### Popular Front End Frameworks
- Angular
- Ember
- Vue
- React

There are many others, but these are among the most popular.

There are differences between them but they largely share lots of common ideas and after learning one framework, you’ll be in a better position to learn about others.

## React:
![pic1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd779098-4179-48b6-a505-c5a7c9d26459%2FUntitled.png?table=block&id=5dab9b47-e76f-49a4-8529-594a8d08189c&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=290&userId=&cache=v2)

Popular, powerful front-end framework.

Developed by and sponsored by Facebook.

- Make it easy to make reusable “view components”
    - These “encapsulate” logic and HTML into a class
- Often make it easier to build modular applications

### Goal
![pic2](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6774604-b15a-4d76-8345-106f3ecbcce8%2FUntitled.png?table=block&id=920cbfe9-6476-455f-b3d8-ced976a31523&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=1910&userId=&cache=v2)

## Components:

- The building blocks of React
- Pieces of UI & view logic
- Functions that know how to render themselves into HTML

_(a bit like this)_
```jsx
function Cat() {
  const name = "Fluffy";

  return `<p>Meow! I'm ${name}!</p>`
}
```

### Demo: Hello
_demo/hello/index.html_
```html
<!DOCTYPE html>
<html>
<body>

<h1>Demo: Hello</h1>

<div id="root"> <!-- component will go in this div --> </div>

<script src=
  "https://unpkg.com/react/umd/react.development.js"></script>
<script src=
  "https://unpkg.com/react-dom/umd/react-dom.development.js">
</script>

<script src="https://unpkg.com/babel-standalone"></script>

<script src="index.js" type="text/jsx"></script>

</body>
</html>
```

A component is a React class with a ***render*** method:
_demo/hello/index.js_
```jsx
function Hello() {
  return <p>Hi Rithm!</p>
}
```

We add our component to HTML with ***ReactDOM.render***:
_demo/hello/index.js_
```jsx
ReactDOM.render(<Hello/>,
  document.getElementById("root"));
```
