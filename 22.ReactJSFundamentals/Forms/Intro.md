# React Forms

## Forms:

- HTML form elements work differently than other DOM elements in React
    - Form elements naturally keep some internal state.
    - For example, this form in plain HTML accepts a single name:

```html
<form>
  <label for="fullname">Full Name:</label>
  <input name="fullname" />
  <button>Add!</button>
</form>
```

### Thinking About State
```html
<form>
  <label for="fullname">Full Name:</label>
  <input name="fullname" />
  <button>Add!</button>
</form>
```

- It’s convenient to have a JS function that
    - handles the submission of the form *and*
    - has access to the data the user entered.
- The technique to get this is *controlled components*.

### Controlled Components
- In HTML, form elements such as ***<input>***, ***<textarea>***, and ***<select>*** typically maintain their own state and update it based on user input
- In React, mutable state is kept in the ***state*** of components, and only updated with the function returned to ***useState()***.
- How do we use React to control form input state?

### One Source of Truth
- We make the React state be the “single source of truth”
- React controls:
    - What is *shown* (the value of the component)
    - What happens the user types *(this gets kept in state)*
- Input elements controlled in this way are called “controlled components”.

### How the Controlled Form Works
- Since value attribute is set on element, displayed value will always be ***fullName*** — making the React state the source of truth.
- Since ***handleChange*** runs on every keystroke to update the React state, the displayed value will update as the user types.
- With a controlled component, every state mutation will have an associated handler function. This makes it easy to modify or validate user input.

### *handleChange* Method
Here is the method that updates state based on input.

```jsx
const NameForm = () => {
  // ...

  const handleChange = (evt) => {
    setFullName(evt.target.value);
  }

  // ...
}
```

### Thinking about labels
- Our ***<label>*** tags have an important attribute called ***for***
- If we give our label attribute a ***for*** attribute that matches with an id of an input, we can click on that label and be autofocused in the input
- This is a nice user experience and is very helpful for accessibility
- But there’s a problem here!

### htmlFor instead
- ***for*** is a reserved word in JavaScript, just like ***class*** is!
- The same way we replaced ***class*** with ***className***, we need to replace ***for*** with ***htmlFor***
- You will get warnings in the console if you forget this
