async function signUp(username, password, name) {
    const req = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup",
        {user: {name, username, password}});
    console.log(req);
}

async function logIn(username, password) {
    const req = await axios.post("https://hack-or-snooze-v3.herokuapp.com/login",
        {user: {username, password}});
    //console.log(req);

    return req.data.token;
}

async function getUsers(token) {
    const req = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", 
        {params: {token}});
    console.log(req);
}

async function getUsersWithAuth() {
    const token = await logIn("alfredoSauce", "1234abc");
    getUsers(token);
}

async function createStoryWithAuth(username, title, author, url) {
    const token = await logIn("alfredoSauce", "1234abc");
    const newStory = {
        token, 
        story: {
            username, title, author, url
        }
    }
    const req = await axios.post("https://hack-or-snooze-v3.herokuapp.com/stories", newStory);
    console.log(req);
}
//getUsers();
//signUp("alfredoSauce", "1234abc", "Spaghetti Alfredo");
//getUsersWithAuth();
createStoryWithAuth("alfredoSauce", "MadVillain", "Spaghetti Alfredo", "http://lol.com");