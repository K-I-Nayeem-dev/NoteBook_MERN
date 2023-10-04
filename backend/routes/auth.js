const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// Create A New User Process/ Methos : Post '/auth/createUser' // No Login Required/ Start

router.post('/createUser',[
    //validation fields Start
    body('name','Username must be at least 5 characters long').isLength({ min: 5 }),
    body('email','Invalid email address').isEmail(),
    body('password','Password must be at least 8 characters long').isLength({ min: 8 }),
    //validation fields End
], async (req, res)=>{

    // Error Send to Server Start
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Error Send to Server End
    

    try {
         //find email in data , is email found return true
        let user = await User.findOne({email: req.body.email})

        if(user){
            return res.status(400).json('Please Enter a Valid Email');
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)


        //Insert date what gives in Database Start//
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        res.json(user)
    } catch (error) {
        return res.status(500).json('Some Error Occurs!');
    }

    // .then(user => res.json(user))
    // .catch(err => {
    //     res.json({error: "Please Enter a Unique or Valid Value", message: err.message})
    // })
    
    //Insert date what gives in Database End//

})

//export router 

module.exports = router

// Create A New User Process/ Methos : Post '/auth/createUser' // No Login Required/ end
