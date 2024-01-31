const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');

/* MIDDLEWARE */
//Static Folders
app.use(express.static('public'));
app.use('/js', express.static('js'));
//Parser
app.use(cookieParser());

/* VIEWS FOLDER */
app.set('view engine', 'html');

/* TEMPLATING */
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

/* ROUTES */
app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/dogs/:name', (req, res, next) => {
    res.render('dog', {name: req.params.name});
});

app.get('/showcookies', (req, res, next) => {
    res.cookie('isLoggedIn', 'definitely');
    res.send(req.cookies);
})

/* SERVER */
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
