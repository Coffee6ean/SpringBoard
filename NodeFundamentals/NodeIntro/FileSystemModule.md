# File System Module -

### fs
The `fs` module is built-in and provides an interface to your local file system.
- It is commonly used to read and write files.
 -To start using it, `const fs = require('fs')`; (no installation necessary).

### Reading Files
The default method for reading files is asynchronous, using a callback.
`fs.readFile(path, encoding, callback)`
- ***path***: path to file (relative to working directory)
- ***encoding***: how to interpret file
    - for text files, this is almost always “utf8”
    - for binary files (like an image), omit this argument
- ***callback***: function that takes ***error*** and ***data***
```js
const fs = require('fs');

fs.readFile('myFile.txt', 'utf8', function(err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    // kill the process and tell the shell it errored
    process.exit(1);
  }
  // otherwise success
  console.log(`file contents: ${data}`);
});

console.log('reading file');
// file won't have been read yet at this point
```

<aside>
💡
Note: It’s common, when using Node, to use asynchronous functions—but for some things, like reading/writing files, there are synchronous methods you can use.
</aside>

```js
const fs = require('fs');

try {
  // store the read file contents
  var contents = fs.readFileSync('myFile.txt', 'utf8');
  console.log(`file contents are "${contents}"`);
} catch (error) {
  // errors thrown by fs will be caught here
  console.error(error);
  // kill the process and tell the shell it errored
  process.exit(1);
}
```

​
## Writing Files:
`fs.writeFile(path, data, encoding, callback)`
- ***path***: path to file (relative to working directory)
- ***data***: data to output to file (typically a string)
- ***encoding***: how to write file
    - for text files, this is almost always “utf8”
    - for binary files (like an image), omit this argument
- ***callback***: function that takes ***error***
```js
const fs = require('fs');

const content = 'THIS WILL GO IN THE FILE!';

fs.writeFile('./files/output.txt', content, "utf8", function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Successfully wrote to file!');
});

console.log('writing file...');
// file won't have been written yet at this point
```

​<aside>
💡
Note: Synchronous version below! 
</aside>

```js
const fs = require('fs');

const content = 'THIS WILL GO IN THE FILE!';

try {
  fs.writeFileSync('./files/output.txt', content);
  console.log('Successfully wrote to file!');
} catch (error) {
  console.error(`File write failed: ${error}`)
  process.exit(1);
}
​
```

### File System Summary
- ***fs*** is a built-in module; import with `require('fs')`.
- The default methods are asynchronous reading and writing
- Stringify file contents when writing with encoding (normally “utf8”)
