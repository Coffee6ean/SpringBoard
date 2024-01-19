//--- Refactoring Async Code ---//
let baseURL = "https://pokeapi.co/api/v2/pokemon";

// Callbacks
$.getJSON(`${baseURL}/1/`, p1 => {
  console.log(`The first pokemon is ${p1.name}`);
  $.getJSON(`${baseURL}/2/`, p2 => {
    console.log(`The second pokemon is ${p2.name}`);
    $.getJSON(`${baseURL}/3/`, p3 => {
      console.log(`The third pokemon is ${p3.name}`);
    });
  });
});

// Promises
$.getJSON(`${baseURL}/1/`)
  .then(p1 => {
    console.log(`The first pokemon is ${p1.name}`);
    return $.getJSON(`${baseURL}/2/`);
  })
  .then(p2 => {
    console.log(`The second pokemon is ${p2.name}`);
    return $.getJSON(`${baseURL}/3/`);
  })
  .then(p3 => {
    console.log(`The third pokemon is ${p3.name}`);
    return $.getJSON(`${baseURL}/3/`);
  });

// Async and Await
async function catchSomeOfEm() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let p1 = await $.getJSON(`${baseURL}/1/`);
    let p2 = await $.getJSON(`${baseURL}/2/`);
    let p3 = await $.getJSON(`${baseURL}/3/`);
  
    console.log(`The first pokemon is ${p1.name}`);
    console.log(`The second pokemon is ${p2.name}`);
    console.log(`The third pokemon is ${p3.name}`);
}
  
catchSomeOfEm();
