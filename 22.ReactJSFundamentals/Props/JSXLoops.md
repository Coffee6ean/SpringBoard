# Looping in JSX -

It’s very common to work with arrays of data and loop over them to render JSX
- A shopping list (display all the shopping items)
- A list of GitHub repositories (display each one)
- A list of songs from an album (display each title)

### Let’s see a demo: Lists!
_demo/list/List.js_
```jsx
const List = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        {props.items.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}
```

_demo/list/App.js_
```jsx
const App = () => (
  <div>
    <List name="Shopping List" items={["Salsa", "Avocado", "Beans"]} />
    <List name="Todo List" items={["Learn React", "Feed cats"]} />
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
```

### We used map here, but what else can we do?
- for loops
- while loops

### Using for loops
Let’s see another example!
_demo/jokes-loops/Jokes-imperative.js_
```jsx
const JokesLoop = () => {
  const jokes = [
    { 
      id: 1, 
      text: "How do you comfort a JavaScript bug? You console it!" 
    },
    { 
      id: 2, 
      text: "Why did the developer quit? Because he didn't get arrays" 
    }
  ];
  const jokeList = [];

  for (let joke of jokes) {
    jokeList.push(<li>{joke.text}</li>);
  }

  return <ul>{jokeList}</ul>;
};
```

### Here’s what it looks like with map

It’s common to use ***array.map(fn)*** to output loops in JSX:
*demo/jokes-loops/Jokes-declarative.js*

```jsx
const JokesMap = () => {
  const jokes = [
    {
      id: 1,
      text: "How do you comfort a JavaScript bug? You console it!"
    },
    {
      id: 2,
      text: "Why did the developer quit? Because he didn't get arrays"
    }
  ];
  return (
    <ul>
      { jokes.map(j => <li>{j.text}</li>) }
    </ul>
  );
}
```

### Which one should I use?
We *highly* recommend map - it’s what you will see everywhere. Here’s just a few reasons why
- you know that your code is going to run on each element of the array in the right order.
- your original array will be unaffected as map returns a new array each time it is called.
- it’s more “declarative”.

### Warnings about key props
If you look in the console, when you are rendering multiple adjacent elements with JSX you’ll see that React is mad at you for not adding something called a “key” prop when you map over an array and render components.

At a high level, keys help React identify which items have changed, are added, or are removed. They should always be unique and not change (also called stable)

You don’t need to worry about this for now; We’ll talk more about what’s happening here shortly. Let’s get comfortable with the fundamentals first!

### Fixing our previous key prop issue
If we wanted to fix our previous issue, here’s how we could do it:
```jsx
const JokesMap = () => {
  const jokes = [
    {
      id: 1,
      text: "How do you comfort a JavaScript bug? You console it!"
    },
    {
      id: 2,
      text: "Why did the developer quit? Because he didn't get arrays"
    }
  ];
  return (
    <ul>
      { jokes.map(j => <li key={j.id}> {j.text}</li>) }
    </ul>
  );
}
```
