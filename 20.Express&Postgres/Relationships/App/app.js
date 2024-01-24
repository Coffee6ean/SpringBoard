/* Hasing and JWT's with Node */
const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const ExpressError = require('./expressError');

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(morgan('dev'));

/* ROUTES */
app.use('/', authRoutes);

// 404 handler
app.use(function(req, res) {
    return new ExpressError('Not Found', 404);
});

// generic error handler 
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;

    // set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.msg || err.message,
            status: status
        }
    });
});

module.exports = app;
