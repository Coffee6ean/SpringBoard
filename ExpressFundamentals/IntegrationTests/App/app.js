const express = require('express');
const catRoutes = require('./cats');
const ExpressError = require('../../Routing&Middleware/App/expressError');

const app = express();

app.use(express.json());
app.use('/cats', catRoutes);

/* 404 handler */
app.use((req, res, next) => {
    return new ExpressError('Not found', 404);
});

/* general error handler */
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.msg || err.message
    });
});

module.exports = app;
