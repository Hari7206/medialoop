const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

let userRouter = express.Router()

userRouter.post("/follow/:username" , identifyUser , userController.followUserController)




userRouter.post("/unfollow/:username" , identifyUser , userController.unfollowUserController)



//  so this is patch api for chechking if the user accepted or rejected the following request 
userRouter.patch("/follow/:id" , identifyUser , userController.respondFollowRequestController)




module.exports = userRouter