import { createContext, useState } from "react";
import { getFeed , likePost , unlikePost} from "./services/post.api";
import { createPost } from "./services/post.api";

export const PostContext = createContext()


export const PostContextProvider = ({children}) =>  {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
    const [feed, setFeed] = useState([])


    const fetchFeed = async () => {
        try {
            setLoading(true);
            const data = await getFeed();
            setFeed(data.posts);
        } catch (error) {
            console.error("Error fetching feed:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePost = async (imageFile , caption) => {
            setLoading(true)
            const data = await createPost(imageFile , caption)
            setFeed([data.post , ...feed])
            setLoading(false)
    }


   const handleLike = async (postId) => {
    await likePost(postId)
    await fetchFeed()
}

  const handleUnLike = async (postId) => {
    await unlikePost(postId)
    await fetchFeed()
}


    return (
        <PostContext.Provider
            value={{
                loading,
                post,
                feed,
                fetchFeed ,
                handleCreatePost ,
                handleLike ,
                handleUnLike
            }}
        >
            {children}
        </PostContext.Provider>
    );
}