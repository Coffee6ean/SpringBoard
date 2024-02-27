# Passing Arguments to Event Handlers

- Inside a loop, you’ll often want an pass arguments functions you pass down.
- But event handlers always receive the event object as their argument!
- To fix, you can wrap your state-changing function inside of an anonymous function

### NumberList Revisited
We could have written our ***NumberList*** like this:

_demo/numbers-app/src/NumberListAlt.js_
```jsx
function NumberListAlt() {
  const [nums, setNums] = useState(
    [1, 2, 3, 4]
  );

  /** Remove num.
   * Wrapped ver passed to/called by child */
  function removeNum(num) {
    setNums(nums.filter(n => n !== num));
  }

  const numsList = nums.map(n => (
    <NumberItemAlt
      value={n}
      key={n}
      remove={evt => removeNum(n)}
    />)
  );

  return <ul>{numsList}</ul>;
}
```

_demo/numbers-app/src/NumberItemAlt.js_
```jsx
function NumberItemAlt(props) {
  return (
    <li>
      {props.value}
      <button onClick={props.remove}>X</button>
    </li>
  );
}
```

### More detail
- Using arrow functions in the parent simplifies the child
- However, there are performance considerations
- We will favor the pattern in ***NumberList*** over the pattern in ***NumberListAlt***
- If you need to pass the event object to the child, send it along as another argument: `evt => remove(n, evt)`
