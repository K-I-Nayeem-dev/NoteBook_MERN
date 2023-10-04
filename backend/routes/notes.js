//import express Start
const express = require('express');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const router = express.Router();
//import express End


// names.forEach((element)=>{
//     details={
//         id:1,
//         names: element,
//         age: 20,
//     }
// })


router.get('/insertNotes',
[
    body('title').isLength({ min:8 }),
    body('description'),
    body('tags').isLength({min:10}),
], (req, res)=>{

    // if there are Errors , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // entry tag into array in mogngoDB
    let tags = req.body.tags;
    let tagStr = tags.split(' ');


    // Entry a New Notes to  Database
    Notes.create({
        title: req.body.title,
        description: req.body.description,
        tags: tagStr
    })
    .then(notes => res.json(notes))
    .catch(err => {
        res.json({error: "Please Enter a Unique or Valid Value", message: err.message})
    })

    // const notes = Notes(req.body);
    // notes.save();
    // res.send(req.body)

});

module.exports = router