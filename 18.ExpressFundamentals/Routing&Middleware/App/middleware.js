const ExpressError = require('./expressError');

function logger(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.path}`);
    return next();
};

function checkForPassword(req, res, next) {
    try {
        if(req.query.password !== 'monkeybreath') {
            // Create an instance of ExpressError and pass it to the next middleware
            const expErr = new ExpressError("Missing Password", 402);
            //console.log(expErr);
            throw expErr;
        } else {
            return next();
        }
    } catch(err) {
        return next(err);
    }
}

module.exports = { logger, checkForPassword }
