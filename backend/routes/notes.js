//import express Start
const express = require('express');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require("../middlewere/fetchuser");


// Route 1: Fetching all Notes form User : Method : get: // Login required Start

router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    
})

// Route 1: Fetching all Notes form User : Method : get: // Login required End


// Route 2: Insert Notes by User : Method : post: // Login required Start

router.post('/insertNotes', fetchuser,
[
    body('title').isLength({ min:8 }),
    body('description').isLength({min:10}),
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

// Route 2: Insert Notes by User : Method : post: // Login required End


module.exports = router