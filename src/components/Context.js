import React, { createContext, useContext } from 'react';
import cookies from 'react-cookies';
import base64 from 'base-64';
import { handlerLogin, logout, handlerSigUP } from './postMethod/AuthMethod';
import { useDispatch } from 'react-redux';
import {ERROR_PASS, CAN_DO_IT, CAN_NOT_DO} from '../store/redux';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
const UserContextProvider = props => {
  const dispatchRedux = useDispatch();


  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (e.target.username.value === '' || e.target.password.value === '' || e.target.confirm.value === '') {
      alert('please fill all field')
    }
    else if (e.target.password.value !== e.target.confirm.value) {
      dispatchRedux(ERROR_PASS());
    }
    else if (e.target.password.value === e.target.confirm.value) {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value
      };
      const encoded = base64.encode(`${user.username}:${user.password}`)
      handlerLogin(dispatchRedux, encoded);
    }
  }
  const handlerLogout = () => {
    logout(dispatchRedux);
  }
  const canDo = () => {
    if (cookies.load('userRole') === 'admin') {
      dispatchRedux(CAN_DO_IT())
    }
    else {
      dispatchRedux(CAN_NOT_DO());
    }
  }
  const handlerSignUp = async (e) => {
    e.preventDefault();
    if (e.target.username.value === '' && e.target.password.value === '' && e.target.confirm.value === '' && e.target.email.value === '') {
      alert('please fill all field')
    }
    else if (e.target.password.value !== e.target.confirm.value) {
      dispatchRedux(ERROR_PASS());
    }

    else if (e.target.password.value === e.target.confirm.value) {
      const newUser = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        userRole: e.target.userRole.value
      }
      handlerSigUP(dispatchRedux, newUser);

    }
  }

  return (
    <UserContext.Provider value={{ canDo, handlerSignUp, handlerSubmit, handlerLogout }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
