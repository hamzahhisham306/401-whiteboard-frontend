import axios from 'axios';
import cookies from 'react-cookies';
const url = 'https://postgrees-srv.herokuapp.com';

export const fetchPosts = () => axios.get(`${url}/postWitheComment`);
export const createPost = (newPost) => axios.post(`${url}/post`, newPost, {
    headers: {
        Authorization: `Bearer ${cookies.load('token')} `
    }
});
export const deletePost = (id) => axios.delete(`${url}/post/${id}`, {
    headers: {
        Authorization: `Bearer ${cookies.load('token')}`,
    }
});