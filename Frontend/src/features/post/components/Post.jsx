import React from 'react'


const Post = ({ user , post ,handleLike, handleUnLike , handleSaved}) => {

 



  return (
     <div className="post">
            <div className="users">
              <div className="img-wrapper">
                <img src={user.profileImage} alt="" />
              </div>
              <p>{user.username}</p>
            </div>

            <img src={post.imgUrl} alt="" />

            <div className="icons">
              <div className="left">
                <button
                
               onClick={()=>{
  post.isLiked 
    ? handleUnLike(post._id) 
    : handleLike(post._id)  
}}
                >
             <svg
  className={post.isLiked ? "like" : ""}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stopColor="#f09433" />
      <stop offset="25%"  stopColor="#e6683c" />
      <stop offset="50%"  stopColor="#dc2743" />
      <stop offset="75%"  stopColor="#cc2366" />
      <stop offset="100%" stopColor="#bc1888" />
    </linearGradient>
  </defs>
  <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" />
</svg>
                </button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"></path></svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path></svg></button>
              </div>

              <div className="right">
                <button
                    onClick={() => handleSaved(post._id)}
                ><svg
               className={post.isSaved ? "saved" : ""}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg></button>
              </div>
            </div>

            <div className="bottom">
              <p className='caption'>{post.caption}</p>
            </div>
          </div>
  )
}

export default Post