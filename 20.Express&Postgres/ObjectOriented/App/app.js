/* pg-oo express application. */
const express = require("express");
const morgan = require('morgan');
const catRoutes = require("./routes/cats");
//const dogRoutes = require("./routes/dogs");

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(morgan('dev'));

/* ROUTES */
app.use("/cats", catRoutes);
//app.use("/dogs", dogRoutes);

/* ERROR */
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
