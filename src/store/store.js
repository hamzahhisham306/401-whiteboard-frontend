import { configureStore } from "@reduxjs/toolkit";
import postReducer from './post';
import reduxSlice from './redux';
import helperSlice from './helper';

export const store = configureStore({
    reducer: {
        post: postReducer,
        reduxState:reduxSlice,
        helperState:helperSlice
    }
});


