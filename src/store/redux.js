import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    help: {
        isLogin: false,
        errorPassword: false,
        message: false,
        canDO: false,
    }
}


export const reduxSlice = createSlice({
    name: 'reduxSlice',
    initialState,
    reducers: {
        LOGIN_SUCCESS: (state) => {
            state.help = { ...state.help, isLogin: true };
        },
        LOGOUT_SUCCESS: (state) => {
            state.help = { ...state.help, isLogin: false };

        },
        LOGIN_FALID: (state) => {
            state.help = { ...state.help, isLogin: false };

        },
        KEEP_LOGIN: (state) => {
            state.help = { ...state.help, isLogin: true };

        },
        ERROR_PASS: (state) => {
            state.help = { ...state.help, errorPassword: true };
        },
        NO_ERROR_PASS: (state) => {
            state.help = { ...state.help, errorPassword: false };

        },

        MESSAGE: (state) => {
            state.help = { ...state.help, message: true };

        },
        NO_MESSAGE: (state) => {
            state.help = { ...state.help, message: false };

        },
        CAN_NOT_DO: (state) => {
            state.help = { ...state.help, canDO: false };

        },
        CAN_DO_IT: (state) => {
            state.help = { ...state.help, canDO: true };
        }
    }
})

export const stateRedux = (state) => state.reduxState.help;
export const { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FALID, KEEP_LOGIN, ERROR_PASS, NO_ERROR_PASS, MESSAGE, NO_MESSAGE, CAN_NOT_DO, CAN_DO_IT } = reduxSlice.actions;


export default reduxSlice.reducer;