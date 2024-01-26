/* Routes for demonstrating authentication in Express */
const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const db = require('../db');
const bcrypt = require('bcrypt');
const {BCRYPT_WORK_FACTOR} = require('../config');

router.get('/', (req, res, next) => {
    res.send('App is working');
});

/* REGISTER */
router.post('/register', async(req, res, next) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            throw new ExpressError('Username and password required', 400);
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        //save to db
        const result = await db.query(
            `INSERT INTO users (username, password) VALUES
            ($1, $2) RETURNING username`, [username, hashedPassword]
        );
        return res.json(result.rows[0]);
    } catch(err) {
        if(err.code === '23505') {
            return next (new ExpressError('Username taken. Please pick another', 400));
        }
        return next(err);
    }
});

/* LOG-IN */
router.post('/login', async(req, res, next) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            throw new ExpressError('Username and password required', 400);
        }
        const result = await db.query(
            `SELECT username, password FROM users
            WHERE username=$1`, [username]
        );
        const user = result.rows[0];
        if(user) {
            if(await bcrypt.compare(password, user.password)) {
                return res.json({message: `Logged in`});
            }
        }
        throw new ExpressError('Invalid username/password', 400);
    } catch(err) {
        if(err.code === '23505') {
            return next (new ExpressError('Username taken. Please pick another', 400));
        }
        return next(err);
    }
})

module.exports = router;
