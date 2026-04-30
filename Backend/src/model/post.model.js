const mongoose = require("mongoose")




let postSchema = new  mongoose.Schema({
    caption:{
        type: String,
        default: ""
    },
    imgUrl:{
        type: String,
        required: [true , "image is required to make an post"]
    },
    user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "users",
         required: [true , " users is reqired to make an post"]
    }
})

let postModel = mongoose.model("posts" , postSchema)


module.exports = postModel