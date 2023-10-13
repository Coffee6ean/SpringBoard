async function getJoke(first, last) {
    const req = await axios.get(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`);
    console.log(req)
}

async function getJoke(firstName, lastName) {
    const req = await axios.get(`http://api.icndb.com/jokes/random`, {params: {firstName, lastName}});
    console.log(req)
}