
const followModel  = require("../model/follow.model")
const userModel  = require("../model/user.model")



async function followUserController(req , res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

      if(followeeUsername == followerUsername){
     return   res.status(400).json({
            message: "you can not follow yourself"
        })
    }


    const isFolloweeExsist = await userModel.findOne({
        username: followeeUsername
    })

    if(!isFolloweeExsist){
        return res.status(404).json({
            message: "The user you are trying to follow does not exsist"
        })
    }

        const isAlreadyFollowing = await followModel.findOne({
        follower:  followerUsername ,
        followee: followeeUsername ,
    })

        if(isAlreadyFollowing){
     if(isAlreadyFollowing.status === "pending"){
            return res.status(409).json({
                message: "follow request is already sent" ,
                isAlreadyFollowing
            })
     }

      else if (isAlreadyFollowing.status === "accepted"){
 return res.status(409).json({
                message: "Already following this user" ,
                isAlreadyFollowing
            })
     }
      else if (isAlreadyFollowing.status === "rejected"){

         isAlreadyFollowing.status = "pending";
          await isAlreadyFollowing.save();

 return res.status(200).json({
                message: "follow request is sent again" ,
                isAlreadyFollowing
            })


        }
    }

  

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername ,
        status: "pending"
    })


    res.status(201).json({
        message: `Your follow req is send to the  ${followeeUsername}` ,
        follow: followRecord
    })
}


async function unfollowUserController(req , res){
  const followerUsername = req.user.username 
  const followeeUsername = req.params.username

  const isUserFollwing = await followModel.findOne({
        follower:  followerUsername ,
        followee: followeeUsername
  })

  if(!isUserFollwing){
    return res.status(404).json({
        message: `you are not follwing this user ${followeeUsername}`
    })
  }
  if(isUserFollwing.status == "pending"){
      await followModel.findByIdAndDelete(isUserFollwing._id)
   return res.status(200).json({
        message: "follow request cancelled"
    })
  }
  if(isUserFollwing.status == "rejected"){
    return res.status(200).json({
        message: "no active follow exists"
    })
  }

  await followModel.findByIdAndDelete(isUserFollwing._id)

  res.status(200).json({
    message: `you unfollowed ${followeeUsername}`
  })


}







async function respondFollowRequestController(req, res) {
    const followRequestId = req.params.id;
    const { status } = req.body;

const isRequestExsist = await followModel.findOne({
    _id: followRequestId,
    status: "pending",
    followee: req.user.username
});

    if (!isRequestExsist) {
        return res.status(404).json({
            message: "request not found"
        });
    }


    if (!["accepted", "rejected"].includes(status)) {
        return res.status(400).json({
            message: "invalid status"
        });
    }

    const updatedfollow = await followModel.findByIdAndUpdate(
        followRequestId,
        { status },
        { new: true }
    );

    return res.status(200).json({
        message: "updated successfully",
        updatedfollow
    });
}







module.exports = {
    followUserController , 
    unfollowUserController ,
    respondFollowRequestController
}