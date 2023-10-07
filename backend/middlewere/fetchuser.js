const jwt = require("jsonwebtoken");
const jsw_Screct = "nayeemisCodingNow";

const fetchuser = (req, res, next) => {

    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).send({ error: "Please Authenticate a Valid User by Token" });
    }

    try {
        const data = jwt.verify(token, jsw_Screct);
        req.user = data.user;
        next();
    } catch (error) {
        console.log(res.user)
        return res.status(401).send({ error: "Please Authenticate a Valid User by Program Fault" });
    }

};

module.exports = fetchuser;