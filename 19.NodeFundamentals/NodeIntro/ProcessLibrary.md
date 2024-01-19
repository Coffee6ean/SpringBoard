# Node *process* Library -

### process
Node provides a global object, ***process***, for managing the current script.
Using ***process***, we can:
- Access environment variables.
- See the command-line arguments passed to the script.
- Kill the script.

Peruse the [documentation](https://nodejs.org/api/process.html#process_process) for a full list of features.

### process.env
`process.env.SECRET_KEY`

Get value of environmental variables from shell
***process.env*** is an object; its keys are the names of environment varibles.
```bash
$ export SECRET_INFO=abc123
$ node
> process.SECRET_INFO
'abc123'
```

### process.argv
`process.argv[index]`

***process.argv*** is an array of command-line arguments given to start this program

**process.argv Example**
_demo/basics/showArgs.js_
```js
const argv = process.argv;

for (let i = 0; i < argv.length; i += 1) {
  console.log(i, argv[i]);
}
```

```bash
$ node showArgs.js hello world
0 '/path/to/node'
1 '/path/to/showArgs.js'
2 'hello'
3 'world'
```

### process.exit
`process.exit(exit_code)`

Exit the program immediately and return an exit code to the shell.
Traditionally, 0 is “no error”; other numbers (1, 2, etc.) are script errors.
