# Handling Multiple Inputs

### ES2015 Review
- ES2015 introduced a few object enhancements…
- This includes the ability to create objects with dynamic keys based on JavaScript expressions.
- The feature is called ***computed property names***.

### Computed Property Names
_ES5_
```jsx
var instructorData = {};
var instructorCode = "elie";
instructorData[instructorCode] = "Elie Schoppik";
```

_ES2015_
```jsx
let instructorCode = "elie";
let instructorData = {
    // propery computed inside the object literal
    [instructorCode]: "Elie Schoppik"
};
```

### Application To React Form Components
Instead of making a separate ***onChange*** handler for every single input, we can make a generic function for multiple inputs!

### Handling Multiple Inputs
To handle multiple controlled inputs, add the HTML ***name*** attribute to each JSX input element and let handler function decide the appropriate key in state to update based on ***event.target.name***.

```jsx
const YourComponent = () => {
  // ...

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  // ...
}
```

- Using this method, the keys in state have to match the input `name` attributes exactly.

The state:

```jsx
{ firstName: "", lastName: "" };
```

_demo/name-form-demo/src/NameForm.js_
```jsx
const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
```

<aside>
💡 **Remember the event target**

React will forget about the event object after the handler runs, for performance reasons. This can be a problem when you use the callback pattern to set state, since setting state isn’t synchronous. This is why we grab what we need from the event first:

**`const** { name, value } = evt.target;`

If you forget to do this and you use the callback pattern, React will throw errors because ***evt.target*** will be null inside of your callback!

For more on this, check out the [React docs](https://reactjs.org/docs/events.html#event-pooling).

</aside>

### Passing Data Up to a Parent Component
In React we generally have downward data flow. “Smart” parent components with simpler child components.

- But it is common for form components to manage their own state…
- But the smarter parent component usually has a ***doSomethingOnSubmit*** method to update its state after the form submission…
- So what happens is the parent will pass its ***doSomethingOnSubmit*** method down as a prop to the child.
- The child component calls this method, updating the parent’s state.
- The child is still appropriately “dumber,” all it knows is to pass its data into a function it was given.

### Shopping List Example
- Parent Component: ShoppingList (manages a list of shopping items)
- Child Component: NewListItemForm (a form to add a new shopping item to the list)

_demo/shopping-list/src/ShoppingList.js_
```jsx
/** Add new item object to cart. */
  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };
```

_demo/shopping-list/src/NewListItemForm.js_
```jsx
/** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  };
```
