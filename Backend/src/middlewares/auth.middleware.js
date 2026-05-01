
const jwt = require("jsonwebtoken")

async function identifyUsers(req , res , next){
     const token = req.cookies.token

    if(!token){
        res.status(409).json({
            message: "Token not provided , unauthorized access"
        })
    }

    let decoded;
   try {
     decoded = jwt.verify(token, process.env.JWT_SECRET);
} catch (err) {
    return res.status(401).json({
        message: "Unauthorized user"
    });
}


req.user = decoded

next()
}

module.exports = identifyUsers
