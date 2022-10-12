import { AuthAction } from "../actions/AuthAction";
import axios from "axios";
import cookies from 'react-cookies'
export const handlerLogin = async (dispatch2, encoded) => {
    try {
        await axios.post('https://postgrees-srv.herokuapp.com/signin', {}, {
            headers: {
                Authorization: `Basic ${encoded}`,
            }
        }).then(res => {
            dispatch2({ type: AuthAction.LOGIN_SUCCESS, payload: res.data });
            cookies.save('userId', res.data.id);
            cookies.save('userName', res.data.username);
            cookies.save('token', res.data.token);
            cookies.save('capabilities', res.data.capabilities);
            cookies.save('userRole', res.data.userRole);
            dispatch2({ type: AuthAction.NO_ERROR_PASS });
            dispatch2({ type: AuthAction.NO_MESSAGE });
        }).catch(error => {
            console.log(error)
            dispatch2({ type: AuthAction.LOGIN_FALID })
            dispatch2({ type: AuthAction.MESSAGE });
        });
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (dispatch2) => {
    cookies.remove('token');
    cookies.remove('userName');
    cookies.remove('userId');
    cookies.remove('userRole');
    cookies.remove('capabilities');

    dispatch2({ type: AuthAction.LOGOUT_SUCCESS })
}

export const handlerSigUP = async (dispatch2, newUser) => {
    await axios.post('https://postgrees-srv.herokuapp.com/signup', newUser).then(respone => {
        dispatch2({ type: AuthAction.LOGIN_SUCCESS, payload: respone.data })
        cookies.save('userId', respone.data.id);
        cookies.save('userName', respone.data.username);
        cookies.save('token', respone.data.token);
        cookies.save('userRole', respone.data.userRole);
        cookies.save('capabilities', respone.data.capabilities);
    }).catch(error => console.log(error));
}