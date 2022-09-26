import axios from 'axios';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Post from './Post'
import cookies from 'react-cookies';

function SingUp() {
  const [username, setUserName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirm, setConfirm]=useState('');
  const [Signin, setSignin]=useState(false);
  const [ErrorPassword, setErrorPassword]=useState(false);



  const handlerSubmit= async(e)=>{
    e.preventDefault();
    if(username===''&&password===''&&confirm===''&&email===''){
      alert('please fill all field')
    }
   else if(password!==confirm){
    setErrorPassword(true);

    }

   else if(password===confirm){
    const newUser={
      username,
      email, 
      password,
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
          <input type='text' onChange={(e)=>setUserName(e.target.value)}/>
          <label>Email</label>
          <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <label>password</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
          <label>confirm password</label>
          {ErrorPassword&&<p style={{color:'red'}}>password don't match</p>}
          <input type='password' onChange={(e)=>setConfirm(e.target.value)}/>
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
