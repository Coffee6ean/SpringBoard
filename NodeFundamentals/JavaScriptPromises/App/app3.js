let fourPokemonPromises = [];

for(let i = 1; i < 5; i++) {
    fourPokemonPromises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    );
}

Promise.all(fourPokemonPromises)
    .then(pokemonArr => (
        pokemonArr.forEach(p => console.log("Pokemon", p.name))
    ))
    .catch(err => console.log(err));