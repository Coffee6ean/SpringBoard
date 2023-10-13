const btnLaunches = document.querySelector("#get-launches");

async function getData() {
    const req = await axios.get("https://swapi.dev/api/planets/");
    const {next, results} = req.data;
    //console.log(next);
    for(let planet of results) {
        console.log(planet.name);
    }

    //--- Nesting with axios ---//
    const req2 = await axios.get(next);
    const results2 = req2.data.results;
    for(let planet of results2) {
        console.log(planet.name);
    }
}

async function getLaunches() {
    const req = await axios.get("https://api.spacexdata.com/v3/launches/upcoming");
    renderLaunches(req.data);
}

function renderLaunches(launches) {
    const ul = document.querySelector("#launches");
    //console.log(req);
    for(let launch of launches) {
        const newLi = document.createElement("li");
        const mission = document.createElement("b");
        mission.innerText = launch["mission_name"];
        newLi.append(mission);
        newLi.innerHTML += ` - ${launch.rocket.rocket_name}`
        ul.append(newLi);
    }
}

//getData();
btnLaunches.addEventListener("click", getLaunches);
console.log("I HAPPEN AFTER FUNCTIONS");

