const postModel = require("../model/post.model")
const likeModel = require("../model/like.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});




async function createPostController(req, res) {
    console.log(req.body, req.file);




    const file = await imagekit.files.upload({
        file: await toFile(req.file.buffer, "file"),
        fileName: "Sword",
        folder: "insta-clone"
    });


    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "post created successfully",
        post
    })
}

async function getPostController(req, res) {


    let userId = req.user.id
    const posts = await postModel.find({
        user: userId
    })


    res.status(200).json({
        message: "post created successfully",
        posts
    })
}



async function getPostDetailsController(req, res) {


    const userId = req.user.id
    const postId = req.params.postId


    const post = await postModel.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "post not found"
        })
    }

    const isValidUser = post.user.toString() == userId

    if (!isValidUser) {
        return res.status(401).json({
            message: "frobidden content"
        })
    }

    res.status(200).json({
        message: "post feteched",
        post
    })
}


async function likePostController(req, res) {
    let username = req.user.username
    let postId = req.params.postId


    const isPostExsist = await postModel.findById(postId)

    if (!isPostExsist) {
        return res.status(404).json({
            message: "post not found"
        })
    }

    const isLiked = await likeModel.findOne({
        post: postId,
        user: username
    })

    if (isLiked) {
        return res.status(409).json({
            message: "post is already liked"
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })

    res.status(201).json({
        message: "post liked successfully",
        like
    })
}


async function getFeedController(req, res) {

    const user = req.user
    let posts = await Promise.all((await postModel.find().populate("user", "-password").lean())


        .map(async (post) => {
            const isLiked = await likeModel.findOne({
              user: user.username,
                post: post._id
            })

            post.isLiked = !!isLiked

            return post
        }))


    res.status(200).json({
        message: "Post Fetched successfully",
        posts
    })
}



module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController,
    likePostController,
    getFeedController
}