# React Router -

To get started with React Router, install ***react-router-dom***.

```
$ npx create-react-app routed
$ cd routed
$ npm install react-router-dom
```

### Including the Router
_demo/routed/src/App.js_
```jsx
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/drink" element={<Drink/>} />
          <Route path="/eat" element={<Eat/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

Wrap the things that need routing with ***<BrowserRouter>***

There are other routers besides ***BrowserRouter*** — don’t worry about them.

Other types of routers

If you read through the React Router docs, you’ll see examples of other types of routers. Here’s a brief description of them:

- ***HashRouter***: this router is designed for support with older browsers that may not have access to the full history API. In such cases, you can still get single-page type functionality by inserting an anchor (#) into the URL. However, this does not provide full backwards-compatibility: for this reason, the React Router documentation recommends ***BrowserRouter*** over ***HashRouter*** if possible.
- ***MemoryRouter*** This router mocks the history API by keeping a log of the browser history in memory. This can be helpful when writing tests, since tests are typically run outside of a browser environment.
- ***NativeRouter*** This router is designed for React Native applications.
- ***StaticRouter*** This is a router that never changes location. When would you ever use this? According to the docs, “This can be useful in server-side rendering scenarios when the user isn’t actually clicking around, so the location never actually changes. Hence, the name: static. It’s also useful in simple tests when you just need to plug in a location and make assertions on the render output.”

## Routes and Links:

### A Sample Application
_App.js_
```jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/drink" element={<Drink/>} />
          <Route path="/eat" element={<Eat/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

### *Route* Component
```jsx
<Route path="/eat" element={<Eat />} />
```

- ***Route*** component acts as translation service between routes & components.
    - Tell it path to look for in URL, and what to render when it finds match.
- Props you can set on a ***Route***:
    - ***path***: path that must match
    - ***element*** : the component to render when the route matches

### *Routes* Component
- ***Routes*** finds a matching ***Route*** and renders only that.
- Wrap all of your ***<Route>*** components with a ***<Routes>*** component

<aside>
💡 Avoid nested routes for now

If you look in the React Router docs, you’ll see that there are ways to nest your ***<Route>*** components inside of other ***<Route>*** components. This is a complicated design and is beyond the scope of what you will need to do in this course (and may not even be something you see at the company you work at).

</aside>
