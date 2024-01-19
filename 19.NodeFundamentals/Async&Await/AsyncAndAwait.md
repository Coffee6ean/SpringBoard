# Using *async* / *await* -

### Object *async*
- We can also place ***async*** functions as methods inside objects!
- Make sure to prefix the name of the function with the ***async*** keyword

_demo/await-examples.js_
```js
let starWars = {
  genre: "sci-fi",
  async logMovieData() {
    let url = "https://swapi.dev/api/films/";
    let movieData = await $.getJSON(url);
    console.log(movieData.results);
  }
};

starWars.logMovieData();
```

<aside>
💡 **Note**: Remember that ***async*** functions **always** return promises. In the example above, `starWars.logMovieData()`returns a resolved promise with a value of ***undefined***, since the function itself has no return value.

If you wanted to do something with the movie data besides ***console.log*** it, you’d need to ***return*** the data from the ***async*** function, and then chain a ***.then*** on the end of `starWars.logMovieData()`.

The moral here is that using ***async***/***await*** doesn’t absolve you from your responsibility to learn about promises. If anything, it’s the opposite: if you don’t understand promises well, it will be harder for you to debug code using ***async*** or ***await***.
</aside>

### Class *async*
- We can also make ***async*** instance methods with ES2015 ***class*** syntax

_demo/pokemon.js_
```js
class Pokemon {
  constructor(id) {
    this.id = id;
  }

  async logName() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
    let response = await $.getJSON(url);
    console.log(response.name);
  }
}

let pokemon = new Pokemon(10);

pokemon.logName();
// "caterpie"
```

### Handling errors
- If a promise is rejected using await, an error with be thrown.
- We can use a ***try***/***catch*** statement to handle errors

_demo/await-examples.js_
```js
async function getUser(user) {
  try {
    let url = `https://api.github.com/users/${user}`;
    let response = await $.getJSON(url);
    console.log(`${response.name}: ${response.bio}`);
  } catch (e) {
    console.log("User does not exist!");
  }
}
```

_demo/await-examples.js_
```js
getUser("mmmaaatttttt");
// Matt Lane: Co-founder at @rithmschool.
// Teacher of how the internet works.
// Check us out at rithmschool.com

getUser("nopenouserhereomggoaway");
// User does not exist!
```
