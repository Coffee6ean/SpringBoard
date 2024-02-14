# Modules 

- ES2015 introduces the idea of “modules”, but browser support is highly limited
- This is a newer, standardized version of Node’s ***require()***
- You use this to export/import classes/data/functions between JS files
- You will see these everywhere in modern JS codebases!

### How does it work?
Using two keywords, **import** and **export**
- We export out variables (functions, objects, strings etc) so other files can use them
- We import “exported” values into a file so that we can use them in the current file we are in

### An example
_hello.js_
```jsx
function sayHello(){
  return "Hello"!
}

export default sayHello;
```

_main.js_
```jsx
import sayHello from "./hello.js"

sayHello();
```
### Importing “Default” Export
_demo/import-export/mystuff.js_
```jsx
function myFunc() {
  console.log("Hi");
}

export default myFunc;
```

_demo/import-export/index.js_
```jsx
// Must start with dot --- "mystuff" would be a npm module!

import myFunc from './mystuff';
```

### Importing Non-Default Named Things
_demo/import-export/mythings.js_
```jsx
function otherFunc() { 
  console.log("Hey");
}

const luckyNumber = 13;

export { otherFunc, luckyNumber };
```

_demo/import-export/index.js_
```jsx
import { otherFunc, luckyNumber} from "./mythings";
```

### Importing Both
_demo/import-export/both.js_
```jsx
function mainFunc() {
  console.log("Ok");
}

const msg = "Awesome!";

export default mainFunc;
export { msg };
```

_demo/import-export/index.js_
```jsx
import mainFunc, { msg } from "./both";
```

### To Default or Not?
- Conventionally, default exports are used when there’s a “most likely” thing to exporting.
- For example, in a React component file, it’s common to have the component be the default export.
- You never **need** a default export, but it can be helpful to indicate most important thing in a file.

### Resources
[Export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

## Transpiling Using Babel

### Babel?
- It is a JavaScript compiler
- You run modern JS that browsers can’t understand and you get out JS that all browsers can understand!
- babeljs.io
