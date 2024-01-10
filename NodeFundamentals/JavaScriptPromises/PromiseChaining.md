# Promise Chaining _

- When you call ***.then*** on a promise, you can return *new* promise in the callback!
- This means you can chain multiple asynchronous operations together with several ***.then*** calls.
- When using this pattern, you only need *one* `.catch` at the end. You don’t have to catch every promise individually.

### Promise Chaining Example
_demo/app-axios.js_
```js
let baseURL = "https://pokeapi.co/api/v2/pokemon";

axios
  .get(`${baseURL}/1/`)
  .then(p1 => {
    console.log(`The first pokemon is ${p1.data.name}`);
    return axios.get(`${baseURL}/2/`);
  })
  .then(p2 => {
    console.log(`The second pokemon is ${p2.data.name}`);
    return axios.get(`${baseURL}/3/`);
  })
  .then(p3 => {
    console.log(`The third pokemon is ${p3.data.name}`);
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });
```

### Takeaways
- A promise represents a pending value *(a guarantee that there will either be a resolved or rejected value)*
- Standard promises all have a `.then()` method, which takes a callback of the resolved value, and this can be chained.
- Standard promises all also have a `.catch()` method, which takes a callback of the rejected value, and this can only be listed once at the end of a `.then` chain.
- Axios and jQuerys’s AJAX methods both use promises.