# Debugging with Express -

### Current Debugging Process
***console.log()***
Like ***print*** in Python, often very useful

### Debugging Node
Can also use the Chrome Dev Tools debugger
Start up Node with `--inspect-brk` flag:
```bash
$ node --inspect-brk sumEvens.js
Debugger listening on ws://127.0.0.1:9229/a98973...
For help, see: https://nodejs.org/en/docs/inspector
```

Open _chrome://inspect_ to pull it up in the Chrome Debugger! 🎉 🤯 🎉

### **Debugging Express**

- With `-inspect-brk` a breakpoint is put on the first line of your app
- Can start with `-inspect` to not stop at first line:
```bash
$ nodemon --inspect
Debugger listening on ws://127.0.0.1:9229/a98973...
For help, see: https://nodejs.org/en/docs/inspector
```
- Use the ***debugger*** keyword in code to activate a breakpoint
    
Open _chrome://inspect_ to pull it up in the Chrome Debugger! 🎉 🤯 🎉
