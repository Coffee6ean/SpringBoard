# Patterns in React Router -

- There aren’t strong standards about how to best use React Router
- Here are patterns *we* for React Router
- Some of these have been mentioned already—here they are in one place

### Consider a single *RoutesList.js* file
- Don’t spread ***<Route>*** components across multiple files
- You can put all ***<Route>***s directly in your ***App***
- When you have many, it may be overwhelming
    - Having a place for all routing info may be preferable
    - May be easier to debug
    - Make a file, ***RoutesList.js***, with a ***RoutesList*** component

### Avoid nested routes
- Components rendered by a ***Route*** can themselves render ***Route*** components
- An example of nested routing, and is generally confusing and error prone
- Unless you need it, don’t nest your routes!
    - You’ll often end up with spaghetti code and a headache

## React Router Tips:

### React Router Tips (Overview)
- Favor ***Route*** child components over other options
- Keep routes up high in the component hierarchy with a ***<Routes>*** component
- Avoid nested routes
- Use the ***<Navigate>*** component and ***useNavigate*** for redirecting
