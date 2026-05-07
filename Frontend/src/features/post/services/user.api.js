

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});


export async function getMe() {
    const token = localStorage.getItem("token");

    const response = await api.get("/auth/get-me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}