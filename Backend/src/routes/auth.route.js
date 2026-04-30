const express = require("express");
const authController = require("../controllers/auth.controller")

const authrouter = express.Router();

authrouter.post("/register", authController.resgisterController);

authrouter.post("/login" , authController.loginController)

module.exports = authrouter;