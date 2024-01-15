//--- Async Instance Methods ---//
class Pokemon {
    constructor(id) {
        this.id = id;
        this.types = [];
    }

    baseURL = "https://pokeapi.co/api/v2/pokemon";

    async getInfo() {
        let res = await axios.get(this.baseURL + `/${this.id}`);
        this.name = res.data.name;
        for(let type of res.data.types) {
            this.types.push(type.type.name);
        }
    }
}

//--- Async Error Handling ---//
// Async and Await
async function getUser(user) {
    try {
        let url = `https://api.github.com/users/${user}`;
        let response = await $.getJSON(url);
        console.log(`${response.name}: ${response.bio}`);
    } catch (e) {
        console.log("User does not exist!", e);
    }
}

// .then Promises
/*
function getUser(user) {
    let url = `https://api.github.com/users/${user}`;
    axios.get(url)
        .then(response => {
            console.log(`${response.data.name}: ${response.data.bio}`);
        })
        .catch(err => {
            console.log("User does not exist!", err);
        })
}
*/

// Instance
const vileplume = new Pokemon(45);
