# Before / After -

### Demo: Shopping Cart Totals
We have a shopping cart system with function to test:
***getCartTotal(cart, discount=0)***
_demo/cart.test.js_
```js
describe("getCartTotal", function () {
  test("get total w/o discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart);
    expect(total).toBe(104.87);
  });

  test("gets total w/discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart, 0.5);
    expect(total).toBe(52.44);
  });
});
```

We can make data in tests:
_demo/cart.test.js_
```js
describe("getCartTotal", function () {
  test("get total w/o discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart);
    expect(total).toBe(104.87);
  });

  test("gets total w/discount", function () {
    const cart = [
      { item: "le croix", price: 4.99, 
      qty: 3 },
      { item: "pretzels", price: 8.99, 
      qty: 10 },
    ];

    const total = getCartTotal(cart, 0.5);
    expect(total).toBe(52.44);
  });
});
```

Can factor out common setup:
_demo/cart.test.js_
```js
describe("getCartTotal", function () {
  // will hold the cart for the tests
  let cart;

  beforeEach(function () {
    cart = [
      { item: "le croix", 
      price: 4.99, qty: 3 },
      { item: "pretzels", 
      price: 8.99, qty: 10 }
    ];
  });

  test("gets total w/o discount", function () {
    const total = getCartTotal(cart);
    expect(total).toBe(104.87);
  });

  test("gets total w/discount", function () {
    const total = getCartTotal(cart, 0.5);
    expect(total).toBe(52.44);
  });
});
```

### Before / After
Jest gives us *hooks* we can tap into so to not repeat common setup/teardown:

- For one-time setup/teardown:
    - ***beforeAll***: run before all tests start
    - ***afterAll***: run after all tests finish
- For frequent setup/teardown:
    - ***beforeEach***: run before each test starts
    - ***afterEach***: run before teach test finish
    
```jsx
describe("my set of tests", function () {
    beforeAll(function(){
    console.log("Run before all tests")
    })

    beforeEach(function(){
    console.log("Run before each it")
    })

    afterEach(function(){
    console.log("Run after each it")
    })

    afterAll(function(){
    console.log("Run after all tests")
    })
});
```
    
Can put these directly in file (outside of functions) to run before/after any/all tests in entire file.
