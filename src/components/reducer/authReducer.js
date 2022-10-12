import { AuthAction } from "../actions/AuthAction"

export const authReducer = (state, action) => {
    switch (action.type) {
        case AuthAction.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                isLogin: true,
            }
        case AuthAction.LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                isLogin: false,
                token: ''
            }
        case AuthAction.LOGIN_FALID:
            return {
                ...state,
                errorMessage: action.payload,
                isLogin: false
            }
        case AuthAction.KEEP_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case AuthAction.ERROR_PASS:
            return {
                ...state,
                errorPassword: true,
            }
        case AuthAction.NO_ERROR_PASS:
            return {
                ...state,
                errorPassword: false,
            }
        case AuthAction.MESSAGE:
            return {
                ...state,
                message: true,
            }
        case AuthAction.NO_MESSAGE:
            return {
                ...state,
                message: false
            }
        case AuthAction.CAN_NOT_DO:
            return {
                ...state,
                canDO:false,
            }
        case AuthAction.CAN_DO_IT:
            return {
                ...state,
                canDO:true,
            }
        default: return state;
    }
}