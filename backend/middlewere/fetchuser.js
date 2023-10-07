const jwt = require('jsonwebtoken');


const fetchuser = (req, res, next)=>{
    
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error: "Please Authenticate a Valid User"})
    }

    const data = jwt.verify(token,)

    next();
}