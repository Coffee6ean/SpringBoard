# Patterns in React Router -

- One of the hardest things about working with React Router is that there aren’t strong community standards about the best way to do things with it.
- Here are patterns *we recommend* you adopt for React Router.
- Some of these have been mentioned already—here they are in one place.

### Consider a single *Routes.js* file
- Don’t spread ***<Route>*** components across multiple files
- You can put all ***<Route>***s directly in your ***App***
- When you have many, it may be overwhelming
    - Having a place for all routing info may be preferable
    - May be easier to debug
    - Make a file, ***Routes.js***, with a ***Routes*** component

### Favor exclusive routing with *Switch*
- Routing is easier to understand when matching is exclusive.
    - Use ***Switch*** to wrap your routes.
- Only omit ***Switch*** if you *want* multiple routes to match
    - This is an advanced and unusual pattern.

### Avoid nested routes
- Components rendered by a ***Route*** can themselves render ***Route*** components.
- An example of nested routing, and is generally confusing and error prone.
- Unless you need it, don’t nest your routes!
    - You’ll often end up with spaghetti code and a headache.

### Use *history.push* for declarative redirection
- When you know “I want to redirect right now”, use ***history.push***
- Save ***Redirect*** for using inside your ***Switch*** for 404-like cases

## Looking Ahead:

### Coming Up
- Redux!
- Integrating React, React Router, and Redux together.
- Full-stack React for fun and profit!
