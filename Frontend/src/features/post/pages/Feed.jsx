import React from 'react'
import "../style/feed.scss"

function Feed() {
  return (
      <main className='feed-page'>
        <div className="feed">
            <div className="posts">
              <div className="post">
                  <div className="users">
                   <div className="img-wrapper">
                     <img src="https://i.pinimg.com/736x/8a/c8/fc/8ac8fc4849025b3fd8066ac48a769573.jpg" alt="" />
                   </div>
                    <p>Username</p>
                </div>
                <img src="https://i.pinimg.com/736x/c3/3f/d0/c33fd001df2be2edc5a0ba0a261fb299.jpg" alt="" />

                <div className="icons">
                    <div className="left">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom">
                    <p className='caption'>caption is the only way to tell your raption</p>
                </div>
              </div>
            </div>
        </div>
      </main>
  )
}

export default Feed