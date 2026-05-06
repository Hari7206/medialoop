import React, { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hook/usePost";
import Nav from "../../shared/components/Nav";

const Saved = () => {
  const {
    savedPosts,
    handlefetchSavedPosts,
    handleLike,
    handleUnLike,
    handleSaved
  } = usePost();

  useEffect(() => {
    handlefetchSavedPosts();
  }, []);

  return (
    <div>
      <Nav />

      <main className="feed-page">
        <div className="feed">
          <div className="posts">

            {savedPosts?.length > 0 ? (
              savedPosts.map((item) => (
                <Post
                  key={item._id}
                  user={item.post.user}
                  post={item.post}
                  handleLike={handleLike}
                  handleUnLike={handleUnLike}
                  handleSaved={handleSaved}
                />
              ))
            ) : (
              <p>No saved posts yet</p>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

export default Saved;