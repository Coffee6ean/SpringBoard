/* Routes for demonstrating authentication in Express */
const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const db = require('../db');

router.get('/', (req, res, next) => {
    res.send('App is working');
});

module.exports = router;
