## Why do we have Promises?
**Callback Hell**

![Screen Shot 2023-05-08 at 4.41.05 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b623a10b-2c0d-47a7-ab92-8887d3d134e6/Screen_Shot_2023-05-08_at_4.41.05_PM.png)

### Pokemon Callback Hell
_demo/app-jquery.js_
```js
let baseURL = "https://pokeapi.co/api/v2/pokemon";

$.ajax(`${baseURL}/1/`, {
  success: p1 => {
    console.log(`The first pokemon is ${p1.name}`);
    $.ajax(`${baseURL}/2/`, {
      success: p2 => {
        console.log(`The second pokemon is ${p2.name}`);
        $.ajax(`${baseURL}/3/`, {
          success: p3 => {
            console.log(`The third pokemon is ${p3.name}`);
          },
          error: err => console.log(err)
        });
      },
      error: err => console.log(err)
    });
  },
  error: err => console.log(err)
});
```
🤢​

### Pokemon with Promises
_demo/app-axios.js_
```js
// promise chaining with pokemon api
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
😍
