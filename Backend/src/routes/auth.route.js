const express = require("express");
const authController = require("../controllers/auth.controller")
const requireUser = require("../middlewares/auth.middleware")

const authrouter = express.Router();

authrouter.post("/register", authController.resgisterController);

authrouter.post("/login" , authController.loginController)



/*
@route   api/auth/get-me
@desc   get the current login user infromation
@access private
*/

authrouter.get("/get-me" , requireUser , authController.getMeController)

module.exports = authrouter;