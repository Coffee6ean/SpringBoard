const express = require('express');
const router = new express.Router();
const Dog = require('../models/dog');

router.get('/', async(req, res, next) => {
    try {
        let dogs = await Dog.getAll();
        dogs.forEach(d => d.speak);
        return res.json(dogs);
    } catch(err) {
        return next(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        let dog = await Dog.getById(req.params.id);
        return res.json(dog);
    } catch(err) {
        return next(err);
    }
});

router.post('/', async(req, res, next) => {
    try {
        const {name, age} = req.body;
        let dogs = await Dog.create(name, age);
        return res.json(dogs);
    } catch(err) {
        return next(err);
    }
});

router.delete('/:id', async(req, res, next) => {
    try {
        const dog = await Dog.getById(req.params.id);
        const result = await dog.remove();
        return res.json({msg: `Deleted dog: ${result}`});
    } catch(err) {
        return next(err);
    }
});

router.patch('/:id/age', async(req, res, next) => {
    try {
        const dog = await Dog.getById(req.params.id);
        dog.age += 1;
        await dog.save();
        return res.json(dog);
    } catch(err) {
        return next(err);
    }
});

router.patch('/:id/name', async(req, res, next) => {
    try {
        const dog = await Dog.getById(req.params.id);
        dog.name = req.body.name;
        await dog.save();
        return res.json(dog);
    } catch(err) {
        return next(err);
    }
});

module.exports = router;
