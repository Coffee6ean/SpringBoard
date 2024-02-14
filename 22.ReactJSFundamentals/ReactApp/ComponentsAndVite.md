# Components and Vite

Good style:
- Each React component goes in separate file
    - ***src/Car.js*** for ***Car*** component
    - ***src/House.js*** for ***House*** component
- Define your function component, then export it as the default
- Skeleton assumes top object is ***App*** in ***App.js***
    - Best to keep this

## Assets and Vite

To include images and CSS, you can import them in JS files!
_demo/my-app-name/src/App.js_
```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### CSS
- Make a CSS file for each React component
    - ***House.css*** for ***House*** component
- Import it at the top of ***House.js***
    - Vite will automatically load that CSS
- Conventional to add `className="House"` onto ***House*** div
    - And use that as prefix for sub-items to style:

```html
<div className="House">
  <p className="House-title">{ props.title }</p>
  <p className="House-address">{ props.addr }</p>
</div>
```

### Images
- Store images in ***src/*** folder with the components
- Load them where needed and use imported name where path should go:

```jsx
import puppy from "./puppy.jpg";

function Animal() {
  return (
    <div>
      <img src={puppy} alt="Cute puppy!" />
    </div>
  );
}
```

### Building for Production
When you're ready to share your project with the world, run `npm run build` to create a production build. You can then deploy this build to a web server or a hosting platform.
