async function getUsers() {
    const req = await axios.get("https://reqres.in/api/users");
    console.log(req);
}

async function createUser() {
    const req = await axios.post("https://reqres.in/api/users", 
        {username: "ButtersTheChicken", age: 1, email:"butters@gmail.com"});
    console.log(req);
}