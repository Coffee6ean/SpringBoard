# React State Patterns

## Passing functions to child components:

### How data flows
A common scenario in React:

- A parent component defines a function
- The function is passed as a prop to a child component
- The child component invokes the prop
- The parent function is called, usually setting new state
- The parent component is re-rendered along with its children

### What it looks like
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

_demo/numbers-app/src/NumberItem.js_
```jsx
function NumberItem(props) {

  /** Delete num via parent fn */
  function handleRemove(evt) {
    props.remove(props.value);
  }

  return (
    <li>
      {props.value}
      <button onClick={handleRemove}>
        X
      </button>
    </li>
  );
}
```
