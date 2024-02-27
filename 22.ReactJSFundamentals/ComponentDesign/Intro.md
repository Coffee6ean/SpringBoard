# React Component Design

## Designing Components & State:

Designing a React application is a challenging skill that takes lots of practice.

Here are some ideas to begin with.

### Components
Generally, components should be small & do one thing

This often makes them more reusable

Example: component that displays a todo w/task could be used in lots of “lists”.

### “Dumb” Components
Often, small components are simple & don’t have state:

```jsx
function Todo(props) {
  return <div className="Todo">{ props.task }</div>;
}
```

This can be used like:

```jsx
function ListOfTodos() {  // ... lots missing
  return (
    <div className="ListOfTodos">
      <Todo task={ todos[0] } />
      <Todo task={ todos[1] } />
      <Todo task={ todos[2] } />
    </div>
  );
}
```

Components like ***Todo*** are called “presentational” or “dumb” *[in a good way!]*

### Don’t Store Derived Info
If one thing can be calculated from another, don’t store both:

```jsx
function TaskList() {
  const [todos, setTodos] = useState(["wash car", "wash cat"]);
  const [numTodos, setNumTodos] = useState(2);

  return (
    <div>
      You have {numTodos} tasks ...
    </div>
  );
}
```

Yuck! Just calculate the number of todos as needed!
