import axios from 'axios';

const baseUrl = `http://localhost:5000`;
const postsUrl = `${baseUrl}/posts`;

export const fetchAllPosts = () => axios.get(postsUrl);
export const createPost = (newPost: object) => axios.post(postsUrl, newPost);
export const updatePost = (id: string, postToUpdate: object) =>
  axios.patch(`${postsUrl}/${id}`, postToUpdate);
