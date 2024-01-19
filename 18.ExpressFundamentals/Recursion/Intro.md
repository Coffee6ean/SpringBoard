# Recursion - 

Having a function call itself
Also: a very powerful programming technique
Also: a popular interview question topic

## The Tiniest Review:

### Functions Calling Functions
```js
function a() {
  console.log("hello");
  b();
  console.log("coding");
}

function b() {
  console.log("world");
  c();
  console.log("love");
}

function c() {
  console.log("i");
}
```

```txt
| → a()
| hello
|
| | → b()
| | world
| |
| | | → c()
| | | i
| | | ← undefined from c()
| |
| | love
| | ← undefined from b()
|
| coding
| ← undefined from a()
```

→ “hello world i love coding”

Remember, when you call a function, you “freeze” where you are until that function returns, and then continue where you left off.

So ***a*** prints `hello`, calls ***b*** which prints `world`, calls ***c*** which prints `i` and returns back to ***b*** which then prints `love` which then returns back to ***a*** which prints `coding`.
