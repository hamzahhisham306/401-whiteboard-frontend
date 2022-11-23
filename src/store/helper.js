import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    helper: {
        show: false,
        name: '',
        age: '',
        id: '',
    }
}

const helperSlice = createSlice({
    name: 'helperSlice',
    initialState,
    reducers: {
        SHOW: (state) => {
            state.helper = { ...state.helper, show: true }
        },
        NOT_SHOW: (state) => {
            state.helper = { ...state.helper, show: false }
        },
        SET_NAME: (state, action) => {
            state.helper = { ...state.helper, name: action.payload }
        },
        SET_AGE: (state, action) => {
            state.helper = { ...state.helper, age: action.payload }
        },
        SET_ID: (state, action) => {
            state.helper = { ...state.helper, id: action.payload }
        }
    }
})

export const stateHelper = (state) => state.helperState.helper;
export const { SHOW, NOT_SHOW, SET_NAME, SET_AGE, SET_ID } = helperSlice.actions;
export default helperSlice.reducer;
