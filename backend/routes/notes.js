const express = require('express');

const route = express.Router();

// names.forEach((element)=>{
//     details={
//         id:1,
//         names: element,
//         age: 20,
//     }
// })
route.get('/',(req, res)=>{
    // res.json(console.log("this is perfecly file"));
    res.json([])
});

module.exports = route