const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const jsonSchema = require('jsonschema');
const bookSchema = require('../schemas/bookSchema.json');

/*
router.post('/', (req, res, next) => {
    const bookData = req.body.book;

    if(!bookData) {
        //pass a 400 error to the error-handler
        let error = new ExpressError('Book data is required', 400);
        return next(error);
    }

    //(not implemented) insert book into database here
    return res.json(bookData);
});
//end
*/

router.post('/', (req, res, next) => {
    const result = jsonSchema.validate(req.body, bookSchema);
    if(!result.valid) {
        console.log(result);
        const listOfErrors = result.errors.map(e => e.stack);
        const err = new ExpressError(listOfErrors, 400);

        return next(err);
    }
    return res.json('Valid Data');
});

module.exports = router;
