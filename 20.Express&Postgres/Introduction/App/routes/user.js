const express = require('express');
const router = new express.Router();
const db = require('../db');
const ExpressError = require('../expressError');

router.get('/', async function (req, res, next){
    try{
        const results = await db.query(`SELECT * FROM users`);
        return res.json({users: results.rows});
    } catch(err) {
        return next(err);
    }
});


/*--- Database Queries ---*/
router.get('/search', async (req, res, next) => {
    try{
        const {type} = req.query;
        console.log('Type', type);
        const results = await db.query(`SELECT * FROM users WHERE type=$1`, [type]);
        return res.json(results.rows);
    } catch(err) {
        return next(err);
    }
});

/*--- CRUD Methods ---*/
//Create
router.post('/', async(req, res, next) => {
    try{
        const {name, type} = req.body;
        const results = await db.query('INSERT INTO users (name, type) VALUES ($1, $2) \
            RETURNING id, name, type', [name, type]);
        return res.status(201).json({user: results.rows[0]});
    } catch(err) {
        return next(err);
    }
});

//Read
router.get('/:id', async(req, res, next) => {
    try {
        const {id} = req.params;
        const results = await db.query('SELECT * FROM users WHERE id=$1', [id]);
        if(results.rows.length === 0){
            throw new ExpressError(`Can't find user with id of ${id}`, 404);
        }
        return res.send({user: results.rows[0]});
    } catch(err) {  
        return next(err);
    }
})

//Update 
router.patch('/:id', async(req, res, next) => {
    try{
        const {id} = req.params;
        const {name, type} = req.body;
        const results = await db.query('UPDATE users SET name=$1, type=$2 WHERE id=$3 \
            RETURNING id, name, type', [name, type, id]);
        if(results.rows.length === 0){
            throw new ExpressError(`Can't update user with id of ${id}`, 404);
        }
        return res.send({user: results.rows[0]});
    } catch(err) {
        return next(err);
    }
});

//Delete
router.delete('/:id', async(req, res, next) => {
    try {
        const results = db.query('DELETE FROM users WHERE id=$1', [req.params.id]);
        return res.send({msg: "DELETED"});
    } catch(err) {
        return next(err);
    }
});

module.exports = router;
