import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Post from './Post'
import {useUserContext} from './Context';


function Signin( ) {
 const {ErrorPassword, handlerSubmit,isSign,message}=useUserContext();
 
  return (
    <>
    {!isSign&&<div className='form-signup' >
        <form className='signup-form' onSubmit={handlerSubmit}>
          <div className='title'>
          <h2 >Login Form</h2>
          </div>
          <label>Username</label>
          <input type='text' id='username'/>
          <label>password</label>
          <input type='password' id='password'/>
          <label>confirm password</label>
          {ErrorPassword&&<p style={{color:'red'}}>password don't match</p>} 
          {message&&<p style={{color:'red'}}>Invalid login</p>} 
          <input type='password' id='confirm'/>
          <button type='submit'>Submit</button>
        </form>
        <Link to='/SingUp'><button style={{display:'block', margin:'auto', padding:'20px', textDecoration:'none'}}>Sign Up</button></Link>
        </div>
}
    {isSign&&<Routes>
    <Route
      path='/'
      element={<Post/>}
     />
    </Routes>}
        </>
  )
}

export default Signin;
