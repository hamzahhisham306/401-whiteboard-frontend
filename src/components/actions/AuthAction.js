export const AuthAction = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FALID: 'LOGIN_FALID',
    LOGOUT_SUCCESS: ' LOGOUT_SUCCESS',
    KEEP_LOGIN: 'KEEP_LOGIN',
    ERROR_PASS: 'ERROR_PASS',
    NO_ERROR_PASS: 'NO_ERROR_PASS',
    MESSAGE: 'MESSAGE',
    NO_MESSAGE: ' NO_MESSAGE',
    CAN_DO_IT: 'CAN_DO_IT',
    CAN_NOT_DO: 'CAN_NOT_DO',
};

export const AuthState = {
    token: '',
    isLogin: false,
    user: {},
    errorPassword: false,
    message: false,
    canDO: false,

}