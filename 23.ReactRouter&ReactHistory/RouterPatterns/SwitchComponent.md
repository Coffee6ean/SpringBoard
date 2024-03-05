# The *Switch* Component -

### Organizing Your Routes
- By default, ***Routes*** match paths *inclusively*.
- If multiple ***Route*** components match, each match will be rendered.
- Using ***exact*** helps, but it’s easy to make mistakes with routing logic.

### Inclusive Routing: An Example
```jsx
function Routes() {
  return (
    <div>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
    </div>
  );
}
```

- How many routes will match */about*?
- How many routes will match */blog*?
- How many routes will match */blog/unicorns-ftw*?

### Exclusive Routing with *Switch*
- Often easier to understand routing when it is *exclusive* (find first match) instead of *inclusive* (find all).
- For exclusive routing: wrap all of ***Route*** components in ***Switch*** component.
- ***Switch*** finds first child ***Route*** that matches and renders only that.

### Exclusive Routing: An Example
```jsx
function Routes() {
  return (
    <Switch>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
    </Switch>
  );
}
```

<aside>
💡 **Ordering your routes**

Remember that when you wrap your ***Route*** components inside of a ***Switch***, only the first matching ***Route*** will be rendered. This means that the ordering of your routes can be incredibly important. For example, if you put the route with the path of “/” at the top, you’ll only ever see the home page:

```jsx
// everything will match the first Route!

<Switch>
  <Route path="/"><Home /></Route>
  <Route path="/about"><About /></Route>
  <Route path="/contact"><Contact /></Route>
  <Route path="/blog/:slug"><BlogPost /></Route>
  <Route path="/blog"><BlogHome /></Route>
</Switch>
```

Similarly, if you put the route to ***/blog*** above the route to ***/blog/:slug***, you’ll never hit the route that renders the ***BlogPost*** component.

To remedy these issues, you can either be careful with your routing (paths that will match more things towards the bottom), or you can use the ***exact*** prop inside of some of your ***Route*** components.

</aside>

### Including a 404
```jsx
function Routes() {
  return (
    <Switch>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/blog/:slug"><Post /></Route>
      <Route exact path="/blog"><BlogHome /></Route>
      <Route exact path="/"><Home /></Route>
      <Route><NotFound /></Route>
    </Switch>
  );
}
```

Note the use of ***exact*** above the catch-all!
