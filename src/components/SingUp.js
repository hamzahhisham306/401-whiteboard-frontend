import axios from 'axios';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Post from './Post'
import cookies from 'react-cookies';

function SingUp() {
  const [Signin, setSignin]=useState(false);
  const [ErrorPassword, setErrorPassword]=useState(false);
  const handlerSubmit= async(e)=>{
    e.preventDefault();
    if(e.target.username.value===''&&e.target.password.value===''&&e.target.confirm.value===''&&e.target.email.value===''){
      alert('please fill all field')
    }
   else if(e.target.password.value!==e.target.confirm.value){
    setErrorPassword(true);

    }

   else if(e.target.password.value===e.target.confirm.value){
    const newUser={
      username:e.target.username.value,
      email:e.target.email.value,
      password:e.target.password.value,
      userRole:e.target.userRole.value
    }

    console.log("ROLE>>",newUser)
    await axios.post('https://postgrees-srv.herokuapp.com/signup',newUser).then(respone=>{
      console.log("SING UP>>>",respone.data);
      setSignin(true);
      cookies.save('userId',respone.data.id);
      cookies.save('userName', respone.data.username);
      cookies.save('token',respone.data.token);
      cookies.save('userRole',respone.data.userRole);
      cookies.save('capabilities',respone.data.capabilities);


    }).catch(error=>console.log(error));
  }
  }
  return (
    <>
    {!Signin&&<div className='form-signup' >
        <form className='signup-form' onSubmit={handlerSubmit}>
          <div className='title'>
          <h2 >Create Account</h2>
          </div>
          <label>Usernmae</label>
          <input type='text' id='username'/>
          <label>Email</label>
          <input type='email' id='email'/>
          <label>password</label>
          <input type='password' id='password'/>
          <label>confirm password</label>
          {ErrorPassword&&<p style={{color:'red'}}>password don't match</p>}
          <input type='password' id='confirm'/>
          <select placeholder='role' id='userRole'>
          <option value='user'>user</option>
          <option value='admin'>admin</option>
          </select>
          <button type='submit'>Submit</button>
        </form> 
    </div>
  }
  {Signin&&<Routes>
    <Route
      path='/'
      element={<Post/>}
     />
    </Routes>}
    </>
  )
}

export default SingUp
