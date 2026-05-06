const mongoose = require("mongoose")


const saveSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: true
    }
},  { timestamps: true })

saveSchema.index({ user: 1, post: 1 }, { unique: true });
const saveModel = mongoose.model("Save" , saveSchema)



module.exports = saveModel