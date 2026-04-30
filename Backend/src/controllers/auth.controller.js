 const userModel = require("../model/user.model");
 const crypto = require("crypto")
 const jwt = require("jsonwebtoken")



 async  function resgisterController  (req, res)  {
    const { username, email, password, bio, profileImage } = req.body;

    const isUserAlreadyExsist = await userModel.findOne({
        $or: [{ username }, { email }]
    });

    if (isUserAlreadyExsist) {
        if (isUserAlreadyExsist.username === username) {
            return res.status(409).json({
                message: "this username already existst"
            });
        }

        if (isUserAlreadyExsist.email === email) {
            return res.status(409).json({
                message: "this email already existst"
            });
        }
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        bio ,
        profileImage
    })

    const token = jwt.sign(
        { id: user._id } , 
    process.env.JWT_SECRET  , {expiresIn: "1d"}
)
res.cookie("token" , token)

        res.status(201).json({
            message: " user register succesfully",
            user:{
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }

        })
}

async function loginController(req , res){
    const {username , email , password} = req.body


    const user = await userModel.findOne({
            $or: [{username: username} ,  {email: email}]
    })

    if(!user){
       return res.status(409).json({
            message: "user not found"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex");
    const isPasswordMatched = hash == user.password

    if(!isPasswordMatched){
        return res.status(409).json({
            message: "password  is not valid"
        })
    }


   const token =  jwt.sign({
        id: user._id
    },
      process.env.JWT_SECRET  , {expiresIn: "1d"}
)
    res.cookie("jwt_cokkie" , token)


    res.status(201).json({
        message: "user logged in succesfully",
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage
    })
}

module.exports = {
    resgisterController,
    loginController
}