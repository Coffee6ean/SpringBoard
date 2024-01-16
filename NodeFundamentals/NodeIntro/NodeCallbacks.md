# Node Callbacks -

Many Node library functions utilize asynchronous callbacks by default.
For example, to read a file:
```js
fs.readFile('myFile.txt', 'utf8', function(err, data) {
    // process file here...
});
```

### Error-First Callbacks
Node.js callbacks usually conform to an **“error-first” pattern.**

- The callback function’s first parameter should be listed as ***error***. Node will supply an ***error object*** (if something bad happened), otherwise ***null*** as arguments.
- Then follow the other parameters, if there are any.
```js
fs.readFile("myFile.txt", "utf8", function(err, data) {
  if (err) {
    // handle error
  }
  // otherwise we're good
});
```

<aside>
💡 **Note**: Nice reading on error-first callback pattern from the [official docs here](https://nodejs.org/api/errors.html#errors_error_first_callbacks).

</aside>

### Handling Errors
In the browser, there are different things to do with errors:
- Show some “an error happened” message in the DOM
- Pop up an alert box
- Log to the console

In Node, you will often do one of these:
- Log the error to the console
- Exit the program with `process.exit(1)` ( ***process*** is always there)

<aside>
💡 **Note**: Sick of callbacks? For an advanced reading, consider [promisifying your callbacks](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original).

Just don’t look at ***callbackify***. *We don’t talk about callbackify*. 🤐

</aside>
