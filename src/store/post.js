import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    post: []
};
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const createPost = action.payload;
            console.log("newPost>>", action.payload)
            state.post=[...state.post, createPost];
        },
        getPosts: (state,action) => {
        state.post=action.payload
        },
        deletePost: (state, action) => {
            const id = action.payload;
            state.post.filter((post) => {
                return post.id !== id;
            });
        }
    }
});

export const postRedux = (state) => state.post.post;


export const { addPost, getPosts, deletePost } = postSlice.actions;

export default postSlice.reducer;