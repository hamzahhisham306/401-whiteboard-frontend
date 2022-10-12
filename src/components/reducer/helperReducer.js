import { helperAction } from "../actions/helperAction"


export const helperReducer = (state, action) => {
    switch (action.type) {
        case helperAction.SHOW:
            return {
                ...state,
                show: true,
            }
        case helperAction.NOT_SHOW:
            return {
                ...state,
                show: false
            }
        case helperAction.SET_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case helperAction.SET_AGE:
            return {
                ...state,
                age: action.payload,
            }
        case helperAction.SET_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state;
    }

}