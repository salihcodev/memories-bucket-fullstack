import axios from 'axios';

const baseUrl = `http://localhost:5000/posts`;

export const fetchAllPosts = () => axios.get(baseUrl);
export const createPost = (newPost: object) => axios.post(baseUrl, newPost);
