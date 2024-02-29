# Cleaning up an Effect

In our previous example, we only fetched data on mount and on update, but it’s very common to handle events when the component will be removed from the DOM. Some common examples include

- clearing intervals or timeouts
- removing an event listener
- unsubscribing
- disconnecting from a socket

### Cleanup with useEffect
To do this, we return a function from useEffect!

```jsx
useEffect(() => {
  // runs on the first render and all times after
  // because we didn't pass in an array as a 2nd arg!
  console.log('Effect ran!');

  // if we return a function
  // it will run when the component unmounts
  // or before the effect runs again
  return () => console.log('in the cleanup phase!');
})
```
