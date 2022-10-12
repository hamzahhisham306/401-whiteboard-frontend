import { postAction } from '../actions/postAction';
import * as api from '../apiAxios/index';

export const getData = async (dispatch) => {
    try {
        const res = await api.fetchPosts();
        dispatch({ type: postAction.GET_POST, payload: res.data });
    }
    catch (e) {
        console.log(e);
    }
}

export const AddPost = async (dispatch, data) => {
    try {
        await api.createPost(data)
            .then(res => {
                dispatch({ type: postAction.ADD_POST, payload: res.data });
            })
    } catch (error) {
        console.log(error);
    }
}


export const deleteSelectedPost = async (dispatch, id) => {
    await api.deletePost(id);
    dispatch({ type: postAction.DELET_POST, payload: id });
}