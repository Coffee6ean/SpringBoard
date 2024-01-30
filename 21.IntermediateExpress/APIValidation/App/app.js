/* Hasing and JWT's with Node */
const express = require('express');
const morgan = require('morgan');
const bookRoutes = require('./routes/books');
const ExpressError = require('./expressError');

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(morgan('dev'));

/* ROUTES */
app.use('/', bookRoutes);

// 404 handler
app.use(function (req, res, next) {
    const err = new ExpressError("Not found!", 404);
    return next(err);
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
