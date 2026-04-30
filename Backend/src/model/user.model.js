const mongoose = require("mongoose")


let userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true , "username already exsist"] ,
        require: [true , "username is required"]
    } ,
    email: {
        type: String,
        unique: [true , "email already exsist"] ,
        require: [true , "email is required"]
    } ,
    password: {
        type: String ,
        require: [true , "password is required"]
    } ,
    bio: String ,
    profileImage: {
        type: String ,
        default: "https://ik.imagekit.io/photosdata/default%20img%20user.avif"
    }
})

let userModel = mongoose.model("users" , userSchema)


module.exports = userModel