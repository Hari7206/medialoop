import { createContext, useState } from "react";
import { getFeed } from "./services/post.api";

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


    return (
        <PostContext.Provider
            value={{
                loading,
                post,
                feed,
                fetchFeed
            }}
        >
            {children}
        </PostContext.Provider>
    );
}