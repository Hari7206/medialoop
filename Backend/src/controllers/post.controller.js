const postModel = require("../model/post.model")
const ImageKit = require("@imagekit/nodejs")
const  { toFile }  = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});




async function createPostController(req , res){
    console.log(req.body , req.file);

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
    console.log(decoded);
    

   const file = await imagekit.files.upload({
file: await toFile(req.file.buffer, "file"),
  fileName: "Sword",
  folder: "insta-clone"
});


    const post = await postModel.create({
        caption: req.body.caption ,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}

module.exports = {
    createPostController
}