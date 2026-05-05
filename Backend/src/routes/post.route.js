const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const identifyUsers = require("../middlewares/auth.middleware")

const postRouter = express.Router()


postRouter.post("/" ,  upload.single('image') ,   identifyUsers , postController.createPostController)



postRouter.get("/"  , identifyUsers ,postController.getPostController)



// now here we will create the one controller for the getting the id detial of post and we will check if that the authorized is requesting for the post or not 

postRouter.get("/details/:postId" ,  identifyUsers  , postController.getPostDetailsController)


/*
@route Post /api/posts/like/:postid
@description so we will like the post accroding to our search post id 
*/
postRouter.post("/like/:postId" ,  identifyUsers  , postController.likePostController)
postRouter.post("/unlike/:postId" ,  identifyUsers  , postController.unLikePostController)



/*
@route get /api/posts/feed
@description so here we will get all the post in the feed 
*/

postRouter.get("/feed" , identifyUsers , postController.getFeedController)



module.exports = postRouter