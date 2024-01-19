# Building our own Promises -

- You can use ***Promise*** with the ***new*** keyword to make your own promises
- Unfortunately, the syntax here takes some getting used to
- ***Promise*** accepts a single function (call it *fn*) as an argument
    - ***fn*** accepts two functions as arguments, ***resolve*** and ***reject***
    - Pass ***resolve*** a value for the promise to resolve to that value
    - Pass ***reject*** a value for the promise to reject to that value
        
        

### Making Promises: An Example
_demo/promises.js_
```js
let mockAjaxRequest = new Promise(function(resolve, reject) {
  let probSuccess = 0.5;
  let requestTime = 1000;

  // We mock a network request using a setTimeout.
  // The request takes requestTime milliseconds.
  // Afterwords, the promise is either resolved with data
  // or rejected with a timeout message,
  // based on whether randomNum is less than probSuccess.
  setTimeout(function() {
    let randomNum = Math.random();
    if (randomNum < probSuccess) {
      let data = "here's your data!";
      resolve(data);
    } else {
      reject("Sorry, your request failed.");
    }
  }, requestTime);
});

mockAjaxRequest
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

​
### Asynchronous Function Pattern
_demo/promises.js_

```js
function myAsyncFunction() {
    // return a new Promise
    return new Promise((resolve, reject) => {
    /*      DO ASYNC STUFF HERE    */ 
    
    // if it succeeds, call the resolve callback
    resolve(/* success value*/);
    // if it fails, call the reject callback
    reject(/* fail value*/);
  });
}
```

### **Takeaways**

- A promise is a **one time guarantee of future value**
- ***Promise*** is part of JavaScript as of ES2015
- There are methods on ***Promise*** that can be used to help work with promises
- You can make your own promises using ***Promise*** with ***new*** keyword, but the syntax isn’t intuitive and takes practice to get used to