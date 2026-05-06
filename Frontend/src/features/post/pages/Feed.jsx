import React from 'react'
import { useEffect } from 'react';
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hook/usePost';
import Nav from '../../shared/components/Nav';

function Feed() {

  
  const { feed, loading, fetchFeed , handleLike , handleUnLike } = usePost();

  useEffect(() => {
    fetchFeed();
  }, []);

  if (loading || !feed) 
    return <p>Loading...</p>;
  return (
  <div > 
    
      <Nav/>
     <main className='feed-page'>
      <div className="feed">
        <div className="posts">


          {Array.isArray(feed) && feed.map((item) => (
            <Post
             key={item._id}
              user={item.user}
              post={item}
              handleLike={handleLike}
              handleUnLike={handleUnLike}
            />
          ))}
        </div>
      </div>
    </main></div>

  )
}

export default Feed