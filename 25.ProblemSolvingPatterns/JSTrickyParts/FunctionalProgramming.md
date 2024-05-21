# Functional Programming -

- FP is the process of building software by composing pure functions, avoiding: shared state, mutable data, and side-effects.
- FP is often declarative rather than imperative, and application state flows through pure functions.

### OOP vs FP
- OOP is typically easier to reason about and read.
- FP has a much steeper learning curve, but can allow for functions to be simplified and easily composed.

### Essential Concepts
- pure functions
- closure
- function composition
- partial application / currying
- HOFs, First-Class Functions

## Design Patterns:

Agreed upon standards / best-practices

- module pattern
- singleton pattern
- many others!

## JS The Trivia Parts:

- var / let / const
- new keyword
- keyword this
- reference types
- immutability
- hoisting
- what does this output?
- call / apply / bind
- arrow functions / bind
- setTimeout 0
- for loop with closure

### Loops with closure

```jsx
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log(i)
  }, 1000)
}
```

### Issues here
- ***i*** is scoped globally
- by the time the setTimeout runs, the value is 5
- We can fix this using the ***let*** keyword or writing an IIFE

### Where you can learn more / practice
- Advanced Web Developer Udemy course (sections on closure + OOP)
- Rithm School curriculum
- Anything by Eric Elliot + Brian Lonsdorf for functional programming
- https://30secondsofinterviews.org/
- https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/
- https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd
