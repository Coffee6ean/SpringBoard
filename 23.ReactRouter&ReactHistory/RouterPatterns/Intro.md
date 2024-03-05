# Patterns in React Router -

## URL Parameters:

### An Anti-Pattern
```jsx
function App() {
  return (
    <App>
      <Route path="/food/tacos">
        <Food name="tacos" />
      </Route>
      <Route path="/food/salad">
        <Food name="salad" />
      </Route>
      <Route path="/food/sushi">
        <Food name="sushi" />
      </Route>
    </App>
  );
}
```

☹️

### What’s the Problem?
```jsx
<App>
  <Route path="/food/tacos">
    <Food name="tacos" />
  </Route>
  <Route path="/food/salad">
    <Food name="salad" />
  </Route>
  <Route path="/food/sushi">
    <Food name="sushi" />
  </Route>
</App>
```

- Lots of duplication
- What if we want to add more foods?
- Solution: Let’s use URL parameters!

### A Better Way
```jsx
import React from "react";
import Nav from "./Nav";
import { Route, BrowserRouter } from "react-router-dom";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/food/:name">
          <Food />
        </Route>
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
<Route exact path="/food/:name">
  <Food />
</Route>
```

- given the above code and a url of ***/food/sushi***
    - the useParams hook returns an object
    - the key of the object in this example will be name
    - the value will be sushi

### useParams in <Food />

```jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GIPHY_URL = "http://api.giphy.com/v1";
function Food() {
  const { name } = useParams();
  const [src, setSrc] = useState(null);

  useEffect(function loadGiphyImgToSrc() {
    async function fetchGif(searchTerm) {
      let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
        params: { q: searchTerm, api_key: "dc6zaTOxFJmzC" }
      });
      setSrc(res.data.data[0].images.original.url);
    }
    fetchGif(name);
  }, [name]);

  let img = src ? <img src={src} alt={name} /> : null;
  return (
    <div>
      <h1>Here's a pic of {name}.</h1>
      {img}
    </div>
  );
}
```

### Multiple URL Parameters
In that example, we only used one URL parameter.

It’s possible to have multiple parameters in a single route.

For example, to have food and beverage pairings in route:

```jsx
<Route path="/food/:foodName/drink/:drinkName">
  <Food />
</Route>
```

Here, ***useParams()*** will return an object with two keys: ***foodName*** and ***drinkName***.
