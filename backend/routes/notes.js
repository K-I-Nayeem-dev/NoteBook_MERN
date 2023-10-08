//import express Start
const express = require('express');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");


// Route 1: Fetching all Notes form User : Method : get: // Login required Start

router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        const notes = await Notes.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ error: "Some Error Occurs!" });
    }
})

// Route 1: Fetching all Notes form User : Method : get: // Login required End


// Route 2: Adding Notes by Login User  : Method : get: // Login required Start

router.post('/addnotes', fetchuser, [
    body('title').isLength({ min:4 }),
    body('description').isLength({min:10}),
    body('tags').isLength({min:10})
], async (req, res)=>{
    try {
        const {title, description, tags} = req.body
        // Error Send to Server Start
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        // Error Send to Server End

        // send data to MongoDB by user
        const note = new Notes({
            title, description, tags , user: req.user.id
        })

        // save data to MongoDB by user
        const saveNotes = await note.save()

        // Output data to MongoDB by user
        res.json(saveNotes)

    } catch (error) {
        return res.status(500).json("Some Error Occurs!");
    }

})

// Route 2: Adding Notes by Login User  : Method : get: // Login required End


// Route 3: Insert Notes by User : Method : post: // Login required Start

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

// Route 3: Insert Notes by User : Method : post: // Login required End


// Route 4: Fetching all Notes form User : Method : get: // Login required Start

router.put('/updatenote/:id', fetchuser, async (req, res)=>{
    try {
        // object destructuring from req.body;
        const {title, description, tags} = req.body
        // Create a newNote Object
        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tags){newNote.tags = tags};

        //find the note to be updated to update it
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send('Not Found')}

        // if req.user.id not equal to note.user.id then it thorw a error
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
        
        // if all method is fine then note will update
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote}, {new:true} );
        res.json({Success: "Note has been Updated", note});
    } catch (error) {
        return res.status(500).json("Some Error Occurs!");
    }

})

// Route 4: Fetching all Notes form User : Method : get: // Login required End


// Route 4: Fetching all Notes form User : Method : get: // Login required Start

router.delete('/deletenote/:id', fetchuser, async (req, res)=>{
    try {
        //find the note to be updated to update it
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send('Not Found')}

        // if req.user.id not equal to note.user.id then it thorw a error
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
        
        // if all method is fine then note will update
        note = await Notes.findByIdAndDelete(req.params.id);
        
        res.json({Success: "Note has been Deleted", Note: note});
    } catch (error) {
        return res.status(500).json("Some Error Occurs!");
    }

})

// Route 4: Fetching all Notes form User : Method : get: // Login required End

module.exports = router