# Lists and Keys

_demo/numbers-app/src/NumberList.js_
```jsx
function NumberList() {
  const [nums, setNums] = useState(
    [1, 2, 3, 4]
  );

  // Remove num. Passed to/called by child
  function removeNum(num) {
    setNums(nums.filter(n => n !== num));
  }

  const numsList = nums.map(n => (
    <NumberItem
      value={n}
      remove={removeNum}
    />)
  );

  return <ul>{numsList}</ul>;
}
```

- When code runs, warning that a key should be provided for list items.
- ***key*** is a special string attr to include when creating lists of elements.

### Adding keys
Let’s assign a key to our list items inside ***numbers.map()***

_demo/numbers-app/src/KeyedNumberList.js_
```jsx
function KeyedNumberList() {
  const [nums, setNums] = useState([1, 2, 3, 4]);

  function removeNum(num) {
    setNums(nums.filter(n => n !== num));
  }

  const numsList = nums.map(n => (
    <NumberItem
      value={n}
      key={n}
      remove={removeNum}
    />)
  );

  return <ul>{numsList}</ul>;
}
```

### Keys
- Keys help React identify which items are changed/added/removed.
- Keys should be given to repeated elems to provide a stable identity.

### Picking a key
- Best way: use string that *uniquely* identifies item among siblings.
- Most often you would use IDs from your data as keys:

```jsx
let todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### Last resort
When you don’t have stable IDs for rendered items, you may use the iteration index as a key as a last resort:
```jsx
// Only do this if items have no stable IDs

const todoItems = fortodos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);
```

- Don’t use indexes for keys if item order may change or items can be deleted.
    - This can cause performance problems or bugs with component state.

<aside>
💡 **More details on Keys**

Here is some further reading on keys, if you’re interested:

[Key props and rendering in React](https://reactjs.org/docs/reconciliation.html)

[Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

</aside>
