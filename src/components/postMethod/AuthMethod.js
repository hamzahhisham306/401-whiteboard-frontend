import axios from "axios";
import cookies from 'react-cookies';
import { LOGOUT_SUCCESS , LOGIN_SUCCESS, NO_MESSAGE, LOGIN_FALID,MESSAGE, ERROR_PASS } from '../../store/redux';

export const handlerLogin = async (dispatch2, encoded) => {
    try {
        await axios.post('https://postgrees-srv.herokuapp.com/signin', {}, {
            headers: {
                Authorization: `Basic ${encoded}`,
            }
        }).then(res => {
            dispatch2(LOGIN_SUCCESS());
            cookies.save('userId', res.data.id);
            cookies.save('userName', res.data.username);
            cookies.save('token', res.data.token);
            cookies.save('capabilities', res.data.capabilities);
            cookies.save('userRole', res.data.userRole);
            dispatch2(ERROR_PASS());
            dispatch2(NO_MESSAGE());
        }).catch(error => {
            console.log(error)
            dispatch2(LOGIN_FALID())
            dispatch2( MESSAGE());
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
    dispatch2(LOGOUT_SUCCESS());
}

export const handlerSigUP = async (dispatch2, newUser) => {
    await axios.post('https://postgrees-srv.herokuapp.com/signup', newUser).then(respone => {
        dispatch2(LOGIN_SUCCESS())
        cookies.save('userId', respone.data.id);
        cookies.save('userName', respone.data.username);
        cookies.save('token', respone.data.token);
        cookies.save('userRole', respone.data.userRole);
        cookies.save('capabilities', respone.data.capabilities);
    }).catch(error => console.log(error));
}