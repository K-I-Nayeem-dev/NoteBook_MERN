const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const jsw_Screct = "nayeemisCodingNow";

//Route 1: Create A New User Process/ Methos : Post '/auth/createUser' // No Login Required/ Start

    router.post(
    "/createUser",
    [
        //validation fields Start
        body("name", "Username must be at least 5 characters long").isLength({
        min: 5,
        }),
        body("email", "Invalid email address").isEmail(),
        body("password", "Password must be at least 8 characters long").isLength({
        min: 8,
        }),
        //validation fields End
    ],
    async (req, res) => {
        // Error Send to Server Start
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        // Error Send to Server End

        try {
        //find email in data , is email found return true
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json("Please Enter a Valid Email");
        }

        // Set Password Plain to Hash & Also Salt

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Insert date what gives in Database Start//
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        //sending User Token

        const data = {
            user: {
            id: user.id,
            },
        };
        // user Authentication Json web Token
        const authtoken = jwt.sign(data, jsw_Screct);
        res.json({ authtoken });
        } catch (error) {
        return res.status(500).json("Some Error Occurs!");
        }

    // .then(user => res.json(user))
    // .catch(err => {
    //     res.json({error: "Please Enter a Unique or Valid Value", message: err.message})
    // })

    //Insert date what gives in Database End//
    }
);

//Route 2:  Authentication a User Process/ Methos : Post '/auth/login' // No Login Required/ Start

router.post("/login",
    [
        body("email", "Plz Enter a valid Email").isEmail(),
        body("password", "Password field can not be blank").exists(),
    ],
    async (req, res) => {
    // Error Send to Server Start
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //destructuring object to check email and password

    const { email, password } = req.body;

    try {
      // searching if email exists or not
        let user = await User.findOne({ email });
      // let passwordCompare = await User.findOne({password});

      //if password do not convert to hashed just copy & paste this code into if(!user) " && !passwordCompare "

      // check email and if email not found return a bad status
        if (!user) {
            res
            .status(400)
            .json({ error: "please check your credentials and try again" });
        }

        // check Password and if Password not found return a bad status
        let passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            res
            .status(400)
            .json({ error: "please check your credentials and try again" });
        }

      // Sending jsonwebtoken with id to user

      //sending User Token

        const data = {
            user: {
            id: user.id,
            },
        };
        // user Authentication Json web Token
        const authtoken = jwt.sign(data, jsw_Screct);

        res.json({ authtoken });
        } catch (error) {
        return res.status(500).json({ error: "Some Error Occurs!" });
        }
    }
);

//  Authentication a User Process/ Methos : Post '/auth/login' // No Login Required/ End

//Route 3: Get User information to fetch token and header / Methos : Post '/auth/fetchuser' // Login Required/ Start

router.post("/fetchuser", fetchuser, async (req, res) => {
    try {

        //fetch login user id from Database to JWT
        const userId = req.user.id;
        //select user by finding user id and select user details without password field
        const user = await User.findById(userId).select("-password");
        //output user id,,, if show user id the it will works 
        console.log(userId)
        //if user won't found then throw this error
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        //if '/fetchuser' route works fine then res.send will show output in TCE 
        res.send(user);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ error: "Some Error Occurs!" });
    }
});

//Route 3: Get User information to fetch token and header / Methos : Post '/auth/fetchuser' // Login Required/ End

//export router

module.exports = router;

// Create A New User Process/ Methos : Post '/auth/createUser' // No Login Required/ end
