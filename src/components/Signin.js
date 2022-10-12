import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Post from './Post'
import { useUserContext } from './Context';

function Signin() {
  const { handlerSubmit,stateAuth } = useUserContext();
  
  return (
    <>
      {!stateAuth.isLogin && <div className='form-signup' >
        <form className='signup-form' onSubmit={handlerSubmit}>
          <div className='title'>
            <h2 >Login Form</h2>
          </div>
          <label>Username</label>
          <input type='text' id='username' data-testid='Name-input' />
          <label>password</label>
          <input type='password' id='password' data-testid='password-input' />
          <label>confirm password</label>
          {stateAuth.errorPassword && <p style={{ color: 'red' }}>password don't match</p>}
          {stateAuth.message && <p style={{ color: 'red' }}>Invalid login</p>}
          <input type='password' id='confirm' />
          <button type='submit'>Submit</button>
        </form>
        <Link to='/SingUp'><button style={{ display: 'block', margin: 'auto', padding: '20px', textDecoration: 'none' }}>Sign Up</button></Link>
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

export default Signin;
