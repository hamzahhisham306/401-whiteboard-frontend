import React from 'react'
import { Routes, Route } from "react-router-dom";
import Post from './Post'
import { useUserContext } from './Context';

function SingUp() {
  const { handlerSignUp,stateAuth } = useUserContext();

  return (
    <>
      {!stateAuth.isLogin && <div className='form-signup' >
        <form className='signup-form' onSubmit={handlerSignUp}>
          <div className='title'>
            <h2 >Create Account</h2>
          </div>
          <label>Usernmae</label>
          <input type='text' id='username' />
          <label>Email</label>
          <input type='email' id='email' />
          <label>password</label>
          <input type='password' id='password' />
          <label>confirm password</label>
          {stateAuth.errorPassword&& <p style={{ color: 'red' }}>password don't match</p>}
          <input type='password' id='confirm' />
          <select placeholder='role' id='userRole'>
            <option value='user'>user</option>
            <option value='admin'>admin</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
      }
      {stateAuth.isLogin && <Routes>
        <Route
          path='/'
          element={<Post />}
        />
      </Routes>}
    </>
  )
}

export default SingUp;
