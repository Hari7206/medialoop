const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router()


postRouter.post("/" ,  upload.single('image') , postController.createPostController)
postRouter.get("/"  , postController.getPostController)



// now here we will create the one controller for the getting the id detial of post and we will check if that the authorized is requesting for the post or not 

postRouter.get("/details/:postId" , postController.getPostDetailsController)


module.exports = postRouter