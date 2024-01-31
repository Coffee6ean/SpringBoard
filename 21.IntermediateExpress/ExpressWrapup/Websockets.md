# Websockets -

- We’ve used Node/Express to deal with HTTP requests
- It can also serve HTTPS
    - Though, typically, that’s handled elsewhere by DevOps
- It can also serve “websocket” protocol
- HTTP is a pretty wordy, heavy protocol
    - So many things in headers!
- HTTP is stateless
    - Ask for answer, get answer, hang up connection
- Websockets are tiny and stateful — they stay connected!
    - They’re often used for “tell the browser something has changed”

### In Client
```js
const ws = new WebSocket(`ws://localhost:3000/chat`);

ws.onopen = function(evt) {
  // called when browser connects to server
};

ws.onmessage = function(evt) {
  // called when browser receives a "message"
  console.log("got", evt.data);

ws.onclose = function(evt) {
  // called when server closes connection
}
```

_to send a message to server_
```js
ws.send("this is a message from browser");
```

### In Server
Library ***express-ws*** makes Websockets act like other routes

_app.js_
```js
const wsExpress = require("express-ws")(app);

app.ws("/chat", function (ws, req, next) {
  ws.on("open", function () {
    // called when connection is opened
  });

  ws.on('message', function (data) {
    // called when message is received from browser
  });

  ws.on('close', function () {
    // called when browser closes connection
  });
});
```

_to send a message to client_
```js
ws.send("this is a message from server");
```

## Goodbye, Node?

Nope! This is the end of our time with backend JS.

But we’ll see that React apps are often made using Node — to setup project, run tests, run dev server, etc.
