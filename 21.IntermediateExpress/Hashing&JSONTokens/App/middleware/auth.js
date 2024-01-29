const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config');
const ExpressError = require('../expressError');

function authenticateJWT(req, res, next) {
    try {
        const payload = jwt.verify(req.body._token, SECRET_KEY);
        req.user = payload;
        console.log('You have a valid token');
        return next();
    } catch(err) {
        return next();
    }
}

function ensureLoggedIn(req, res, next) {
    if(!req.user) {
        const err = new ExpressError('Unauthorized', 401);
        return next(err);
    } else {
        return next()
    }
}

function ensureAdmin(req, res, next) {
    if(!req.user || req.user.type !== 'admin') {
        return next(new ExpressError('Must be admin to go here', 401));
    }
    return next();
}

module.exports = {authenticateJWT, ensureLoggedIn, ensureAdmin};
