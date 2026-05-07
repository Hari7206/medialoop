import { createContext, useState } from "react";
import { getFeed, likePost, savedPost, unlikePost, getSavedPostsApi  } from "./services/post.api";
import { getMe } from "./services/user.api";
import { createPost } from "./services/post.api";

export const PostContext = createContext()


export const PostContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState([])
    const [feed, setFeed] = useState([])
    const [savedPosts, setSavedPosts] = useState([]);
    const [user , setUser] = useState(null)


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

    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
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


    const handleSaved = async (postId) => {
        setLoading(true)
        await savedPost(postId)
        await fetchFeed()
        setLoading(false)
    }

    const handlefetchSavedPosts = async () => {
        const data = await getSavedPostsApi();
        setSavedPosts(data.savedPosts);
    };


   const loadUser = async () => {
    try {
        setLoading(true);
        const data = await getMe();
        setUser(data.user);

    } catch (error) {
        console.log("Error fetching user:", error);
    } finally {
        setLoading(false);
    }
};
    return (
        <PostContext.Provider
            value={{
                loading,
                post,
                feed,
                fetchFeed,
                handleCreatePost,
                handleLike,
                handleUnLike,
                handleSaved,
                savedPosts,
                handlefetchSavedPosts ,
                user ,
                loadUser
            }}
        >
            {children}
        </PostContext.Provider>
    );
}