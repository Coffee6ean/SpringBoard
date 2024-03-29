/* pg-oo express application. */
const express = require('express');
const Cat = require('../models/cat');
const router = new express.Router();

/* get all cats: [(id, name, age), ...] */
router.get('/', async(req, res, next) => {
    try {
        const cats = await Cat.getAll();
        return res.json(cats);
    } catch(err) {
        return next(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const cat = await Cat.getById(req.params.id);
        return res.json(cat);
    } catch(err) {
        return next(err);
    }
});

router.post('/', async(req, res, next) => {
    try {
        const {name, age} = req.body;
        const cat = await Cat.create(name, age);
        return res.json(cat);
    } catch(err) {
        return next(err);
    }
});

router.delete('/:id', async(req, res, next) => {
    try{
        await Cat.delete(req.params.id);
        return res.json({msg: `Deleted cat: ${req.params.name}`});
    } catch(err) {
        return next(err);
    }
});

router.put('/:id', async(req, res, next) => {
    try {
        const {name, age} = req.body;
        const cat = await Cat.update(req.params.id, name, age);
        return res.json(cat);
    } catch(err) {
        return next(err);
    }
});

router.patch('/:id', async(req, res, next) => {
    try {
        const cat = await Cat.makeOlder(req.params.id);
        return res.json(cat);
    } catch(err) {
        return next(err);
    }
});

module.exports = router;
