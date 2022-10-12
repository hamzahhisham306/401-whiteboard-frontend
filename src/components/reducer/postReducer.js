import { postAction } from "../actions/postAction"


export const postReducer = (state, action) => {

    switch (action.type) {
        case postAction.ADD_POST:
            return [
                ...state, action.payload
            ];
        case postAction.GET_POST:
            return action.payload;
        case postAction.DELET_POST:
            return state.filter((item) => {
                return item.id !== action.payload
            });
        default:
            return state;
    }

}