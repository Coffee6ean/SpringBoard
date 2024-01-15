//--- Await Keyword ---//
async function getStarWarsFilms() {
    console.log("Strating");
    const res = await axios.get("https://swapi.dev/api/films/");
    console.log("Ending");
    console.log(res.data);
}

// Re-write function
console.log('Starting');
axios.get("https://swapi.dev/api/films/")
    .then(res => {
        console.log('Ending');
        console.log(res.data);
    });
