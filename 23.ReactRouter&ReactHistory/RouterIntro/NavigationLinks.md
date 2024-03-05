# Navigation Links -

### *Link* Component
- The ***<Link>*** component acts as a replacement for ***<a>*** tags.
- Instead of an ***href*** attribute, ***<Link>*** uses a ***to*** prop
- Clicking on ***<Link>*** does *not* issue a GET request.
    - JS intercepts click and does client-side routing

```jsx
<p>Go to <Link to="/drink">drinks</Link> page</p>
```

<aside>
💡 ***NavLink*** Component

- ***<NavLink>*** is just like link, with one additional feature
    - If at page that link would go to, the ***<a>*** gets a CSS class of *active*
        - This lets you have CSS like this:
            
            ```css
            .MyNavBarClass a {
              color: white;
            }
            
            .MyNavBarClass a.active {
              color: black;
            }
            ```
            
- Very helpful for navigation menus
</aside>

### A Sample Navigation Bar
_Nav.js_
```jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/eat">
        Eat
      </Link>
      <Link to="/drink">
        Drink
      </Link>
    </nav>
  );
}

export default NavBar;
```

## URL Parameters:

### An Anti-Pattern
```jsx
function App() {
  return (
    <App>
      <Routes>
        <Route path="/food/tacos" element={<Food name="tacos" />} />
        <Route path="/food/salad" element={<Food name="salad" />} />
        <Route path="/food/sushi" element={<Food name="sushi" />} />
      </Routes>
    </App>
  );
}
```

☹️

### What’s the Problem?
- Lots of duplication
- What if we want to add more foods?
- Solution: Let’s use URL parameters!

### A Better Way
```jsx
import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/food/:name" element={<Food/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

Like with Express, we indicate a URL parameter with a colon `:`

### Accessing URL Parameters
The ***useParams*** hook stores info on the URL parameters.

```jsx
<Route path="/food/:name" element={<Food/>} />
```

- given the above code and a url of
    
    ***/food/sushi***
    
    - the useParams hook returns an object
    - the key of the object in this example will be ***name***
    - the value will be ***sushi***

For the route ***/food/:name***

```jsx
import { useParams } from "react-router-dom"

function Food() {
  const params = useParams(); // { name: ... }
  return (
    <div>
      <h1>You must like { params.name }</h1>
    </div>
  );
}
```

<aside>
💡

Multiple URL Parameters

In that example, we only used one URL parameter.

It’s possible to have multiple parameters in a single route.

For example, to have food and beverage pairings in route:

```jsx
<Route path="/food/:foodName/drink/:drinkName">
  <Food />
</Route>
```

Here, ***useParams()*** will return an object with two keys: ***foodName*** and ***drinkName***.

</aside>
