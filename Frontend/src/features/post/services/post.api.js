import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true

})



export async function getFeed() {
    const token = localStorage.getItem("token");

    const response = await api.get("/api/posts/feed", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export async function createPost(imageFile, caption) {

    const formData = new FormData()

    formData.append("image", imageFile)
    formData.append("caption", caption)
    const response = await api.post("/api/posts/", formData)
    return response.data
}


export async function likePost(postId) {
    const response = await api.post("/api/posts/like/" + postId)
    return response.data
}
export async function unlikePost(postId) {
    const response = await api.post("/api/posts/unlike/" + postId)
    return response.data
}


export async function savedPost(postId) {
    const response = await api.post("/api/posts/save/" + postId)
    return response.data
}

export const getSavedPostsApi = async () => {
    const res = await api.get("/api/posts/saved", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });

    return res.data
};

