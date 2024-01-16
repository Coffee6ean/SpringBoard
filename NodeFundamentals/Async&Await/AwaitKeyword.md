# The *await* keyword -

### *await* Overview
- Inside of an ***async*** function, we can use the ***await*** keyword
- ***await*** pauses the execution of the ***async*** function
- Can ***await*** any async operation returning a promise (eg other ***async*** functions!)
- The ***await*** keyword waits for promise to resolve & extracts its resolved value
- It then resumes the ***async*** function’s execution
- Think of the ***await*** keyword like a pause button

### Using *await*
_demo/await-examples.js_
```js
async function getStarWarsData() {
  console.log("starting!");
  let movieData = await $.getJSON(
      "https://swapi.dev/api/films/");
  // these lines do NOT run until the promise is resolved!
  console.log("all done!");
  console.log(movieData);
}

getStarWarsData();
```

No ***.then*** or callback necessary!
