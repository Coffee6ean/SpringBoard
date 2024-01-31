const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

/* STATIC FOLDERS */
app.use(express.static('public'));
app.use('/js', express.static('js'));

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

/* SERVER */
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
