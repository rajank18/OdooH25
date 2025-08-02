// src/api/axios.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // Change if your backend runs elsewhere
    withCredentials: true, // Include cookies (if you use auth tokens via cookies)
});

export default api;
