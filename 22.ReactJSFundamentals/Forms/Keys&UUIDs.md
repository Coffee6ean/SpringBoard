# Keys and UUIDs

### Using UUID for Unique Keys
- We’ve seen that using an iteration index as a ***key*** prop is a bad idea
- No natural unique key? Use a library to create a *uuid*
- Universally unique identifier (UUID) is a way to uniquely identify info
- Install it using `npm install uuid`

### Using the UUID Module
_demo/shopping-list/src/ShoppingList.js_
```jsx
import { v4 as uuid } from 'uuid';
  /** Add new item object to cart. */
  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };
```

_demo/shopping-list/src/ShoppingList.js_
```jsx
const renderItems = () => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}: {item.qty}
        </li>
      ))}
    </ul>
  );
};
```

### Uncontrolled components
- If React is *not* in control of the form state, this is called an *uncontrolled component.*
- Some inputs and external libraries require it.

### Validation
- Useful for UI
- **Not an alternative to server side validation**
- [Formik](https://jaredpalmer.com/formik/docs/overview)

## Testing Forms:

- To test typing in form inputs, we can use ***fireEvent.change***
- When using this, we’ll need to mock  - this is how we’ll tell React testing library what to place in the input ***evt.target.value***
- For controlled components, state will then automatically update

### Testing Forms: An Example
_demo/shopping-list/src/ShoppingList.test.js_
```jsx
it("can add a new item", function() {
  const { getByLabelText, queryByText } = render(<ShoppingList />);

  // no items yet
  expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

  const nameInput = getByLabelText("Name:");
  const qtyInput = getByLabelText("Qty:");
  const submitBtn = queryByText("Add a new item!")

  // fill out the form
  fireEvent.change(nameInput, { target: { value: "ice cream" }});
  fireEvent.change(qtyInput, { target: { value: 100 }});
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("ice cream: 100")).toBeInTheDocument();
});
```

## Looking Ahead:

### Coming Up
- ***useEffect***
- AJAX with React
