import * as api from '../apiAxios/index';
import { addPost, deletePost, getPosts } from '../../store/post';


export const getData = async (dispatch) => {
    try {
        const res = await api.fetchPosts();
        dispatch(getPosts(res.data))
    }
    catch (e) {
        console.log(e);
    }
}

export const AddPost = async (dispatch, data) => {
    try {
        await api.createPost(data)
            .then(res => {
                dispatch(addPost(res.data));
            })
    } catch (error) {
        console.log(error);
    }
}


export const deleteSelectedPost = async (dispatch, id) => {
    try {

        await api.deletePost(id);
        dispatch(deletePost(id));
        const res = await api.fetchPosts();
        dispatch(getPosts(res.data))
    } catch (error) {
        console.log(error);
    }
}