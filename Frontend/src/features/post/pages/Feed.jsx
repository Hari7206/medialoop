import React from 'react'
import { useEffect } from 'react';
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hook/usePost';

function Feed() {

  
  const { feed, loading, fetchFeed } = usePost();

  useEffect(() => {
    fetchFeed();
  }, []);

  if (loading || !feed) 
    return <p>Loading...</p>;
  return (
    <main className='feed-page'>
      <div className="feed">
        <div className="posts">


          {Array.isArray(feed) && feed.map((item) => (
            <Post
             key={item._id}
              user={item.user}
              post={item}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Feed