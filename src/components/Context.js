import React, { createContext, useContext, useReducer } from 'react';
import cookies from 'react-cookies';
import base64 from 'base-64';
import { authReducer } from './reducer/authReducer';
import { AuthState } from './actions/AuthAction';
import { AuthAction } from './actions/AuthAction';
import { handlerLogin, logout, handlerSigUP } from './postMethod/AuthMethod';
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = props => {
  const [stateAuth, dispatch2] = useReducer(authReducer, AuthState);


  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (e.target.username.value === '' || e.target.password.value === '' || e.target.confirm.value === '') {
      alert('please fill all field')
    }
    else if (e.target.password.value !== e.target.confirm.value) {
      dispatch2({ type: AuthAction.ERROR_PASS });
    }
    else if (e.target.password.value === e.target.confirm.value) {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value
      };
      const encoded = base64.encode(`${user.username}:${user.password}`)
      handlerLogin(dispatch2, encoded);
    }
  }
  const handlerLogout = () => {
    logout(dispatch2);
  }
  const canDo = () => {
    if (cookies.load('userRole') === 'admin') {
      dispatch2({ tyep: AuthAction.CAN_DO_IT })
    }
    else {
      dispatch2({ type: AuthAction.CAN_NOT_DO });
    }
  }
  const handlerSignUp = async (e) => {
    e.preventDefault();
    if (e.target.username.value === '' && e.target.password.value === '' && e.target.confirm.value === '' && e.target.email.value === '') {
      alert('please fill all field')
    }
    else if (e.target.password.value !== e.target.confirm.value) {
      dispatch2({ type: AuthAction.ERROR_PASS });

    }

    else if (e.target.password.value === e.target.confirm.value) {
      const newUser = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        userRole: e.target.userRole.value
      }
      handlerSigUP(dispatch2, newUser);

    }
  }

  return (
    <UserContext.Provider value={{ stateAuth, dispatch2, canDo, handlerSignUp, handlerSubmit, handlerLogout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
