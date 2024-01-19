const express = require('express');

// Execute express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/dogs', (request, response) => {
    console.log('Dogs here');
    //console.log(request);
    response.send("<h1>Woof woof!</h1>");
});

app.get('/dogs', (request, response) => {
    response.send("<h1>Miau Miau</h1>");
});

app.get('/chickens', (req, res) => {
    res.send('Bock bock (get request)');
});

app.post('/chickens', function createChicken(req, res) {
    res.send('You created a new chicken - not really (post request)');
});

const greetings = {
    en: "Hello",
    fr: "Bonjour",
    es: "Hola",
    js: "Konichiwa"
}

app.get('/greet/:language', (req, res) => {
    const lang = req.params.language;
    const greeting = greetings[lang];
    if(!greeting) return res.send("Invalid Language");
    res.send(greeting);
});

app.get('/search', (req, res) => {
    const { term = 'piggies', sort = 'top' } = req.query;
    return res.send(`SEARCH PAGE!  Term is: ${term}, sort is: ${sort}`);
});

app.get('/show-me-headers', (req, res) => {
    console.log(req.rawHeaders);
    console.log(req.headers);
    res.send(req.headers);
});

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language'];
    res.send(`Your language of preference is: ${lang}`);
});

app.post('/register', (req, res) => {
    //res.send(req.body);
    res.send(`Welcome, ${req.body.username}!!!`);
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});
