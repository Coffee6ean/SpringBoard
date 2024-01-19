const express = require('express');
const router = new express.Router();
const ExpressError = require('../../Routing&Middleware/App/expressError');
const cats = require('./fakeDB');

router.get('/', (req, res) => {
    res.json({cats});
});

router.post('/', (req, res) => {
    const newCat = {name: req.body.name};
    console.log('New cat:', newCat);
    cats.push(newCat);
    res.status(201).json({cat: newCat});
});

router.get('/:name', (req, res) => {
    const foundCat = cats.find(cat => cat.name === req.params.name);
    if(foundCat === undefined) {
        throw new ExpressError('Cat not found', 404);
    }
    res.json({cat: foundCat});
});

router.patch('/:name', (req, res) => {
    const foundCat = cats.find(cat => cat.name === req.params.name);
    if(foundCat === undefined) {
        throw new ExpressError('Cat not found', 404);
    }
    foundCat.name = req.body.name;
    res.json({cat: foundCat});
});

router.delete('/:name', (req, res) => {
    const foundCat = cats.find(cat => cat.name === req.params.name);
    if(foundCat === -1) {
        throw new ExpressError('Cat not found', 404);
    }
    cats.splice(foundCat, 1);
    res.json({message: 'Deleted'});
});

module.exports = router;
