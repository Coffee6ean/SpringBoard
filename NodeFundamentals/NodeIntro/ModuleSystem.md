## The Module System -

### Modules
Modules are the way to share code across different files in a Node project.
You might hear this system referred to as “CommonJS Modules”.

There aren’t ***<script>*** tags in the Node ecosystem, so you have to include other files by exporting/importing explicitly.

### Importing a Project File
All imports use the ***require*** keyword.

To import a local project file, specify a ***relative path*** to that file:
_demo/modules/other.js_
```js
const usefulStuff = require("./usefulStuff");

const results = usefulStuff.add(2, 3);

console.log(results);
```
- This usually means `./` for current directory or `../` for parent directory
- You don’t need to include the file extension for `.js` and `.json` files.

### Importing a Library
To import a built-in module or NPM package, simply exclude the relative path.

_demo/modules/google.js_
```js
const axios = require('axios');

axios.get('http://google.com').then(function(resp) {
  console.log(resp.data.slice(0, 80), '...');
});
```
Node will look in its includes core modules and ***node_modules***.

### Destructuring Imports
When importing an object, it is possible to destructure into variables:

_demo/modules/other2.js_
```js
const { add, User } = require('./usefulStuff');

const results = add(2, 3);

console.log(results);
```

### Exporting from a File
Use built-in ***module.exports*** to explicitly export things from a file.

_demo/modules/usefulStuff.js_
```js
const MY_GLOBAL = 42;

function add(x, y) {
  return x + y;
}

class User {
  constructor(name, username) {
    this.name = name;
    this.username = username;
  }
}

const notNeededElsewhere = 'nope'; // I don't get exported!

// export an object
module.exports = {
  MY_GLOBAL: MY_GLOBAL,
  add: add,
  User: User
};
```

### module.exports
Normally ***module.exports*** is an object; this can export multiple things.

But you can actually set it to whatever you want:
_in one file_
```js
module.exports = function() {
  console.log('hello welcome to Node.js');
}
```

_in another file_
```
const sayHello = require('./example');

sayHello();
// hello
```

### Modules Summary
Export contents of files with module.exports (which is usually an object)
Import contents of local files using the require keyword with a relative path
Import libraries using require keyword without path—just the library name
