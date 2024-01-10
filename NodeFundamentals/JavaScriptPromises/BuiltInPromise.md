# The built-in Promise function -

### More on Promise
- ***Promise*** was added as a global variable in ES2015
- You can create your own promises using
    ***Promise***
    
- There are also several helper methods that live on , including:
    ***Promise***
    - ***Promise.all***
    - ***Promise.race***
    - ***Promise.resolve***
    - ***Promise.reject***

**Not all Promise methods are created equal**

In general, you’ll typically find that ***Promise.all*** is by far the most useful method on the `Promise` function. There are definitely use-cases for ***Promise.race***, ***Promise.resolve***, and ***Promise.reject***, but they are more rare.

For now, you should focus your attention on getting comfortable with ***Promise.all***, as we won’t really encounter these other methods until we’ve gotten farther in the Node curriculum.

### Promise.all
- ***Promise.all*** accepts an array of promises and returns a *new* promise
- This new promise will resolve when every promise in the array resolves, and will be rejected if any promise in the array is rejected
- ***Promise.all*** is extremely useful whenever you want to send out several independent requests **in parallel**.

### Promise.all Example
_demo/app-axios.js_
```js
let fourPokemonPromises = [];

for (let i = 1; i < 5; i++) {
  fourPokemonPromises.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  );
}

Promise.all(fourPokemonPromises)
  .then(pokemonArr => (
    pokemonArr.forEach(p => console.log(p.name))
  ))
  .catch(err => console.log(err));
```

### Promise.race
- ***Promise.race*** accepts an array of promises and returns a *new* promise
- This new promise will resolve or reject as soon as one promise in the array resolves or rejects

### Promise.race Example
_demo/app-axios.js_
```js
let fourPokemonRace = [];

for (let i = 1; i < 5; i++) {
  fourPokemonRace.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  );
}

Promise.race(fourPokemonRace)
  .then(pokemon => console.log(`${pokemon.name} won!`))
  .catch(err => console.log(err));
```

### Promise.resolve
***Promise.resolve*** accepts a value and returns a promise which has immediately resolved to the value passed in.
_demo/promises.js_
```js
let resolvedValue = "hello!";
let p1 = Promise.resolve(resolvedValue);
p1; // Promise {<resolved>: "hello!"}


p1 === resolvedValue; // false
```

### Promise.reject
***Promise.reject*** accepts a value and returns a promise which has immediately rejected to the value passed in.

_demo/promises.js_
```js
let rejectedValue = "sorry :(";
let p2 = Promise.reject(rejectedValue);
p2; // Promise {<rejected>: "sorry :("}


p2 === rejectedValue; // false
```
