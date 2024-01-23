const express = require('express');
const morgan = require('morgan');
const ExpressError = require('./expressError');
const userRoutes = require('./routes/user');

const app = express();

/* MIDDLEWARE */
app.use(express.json());
//app.use(middleware.logger);
app.use(morgan('dev'));

/* ROUTES */
app.use('/users', userRoutes);

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

app.listen(3000, function() {
    console.log('App on port 3000');
});
