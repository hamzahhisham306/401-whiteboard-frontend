import axios from 'axios';
import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import base64 from 'base-64';
import Post from './Post'
import cookies from 'react-cookies';


function Signin({isSign, handlerSign,setName}) {
//  const [username, setUsername]=useState('');
//  const [password, setPassword]=useState('');
//  const [confirm, setConfirm]=useState('');
 const [ErrorPassword, setErrorPassword]=useState(false);
 const [message, setMessage]=useState(false);


 const handlerSubmit=async(e)=>{
    e.preventDefault();
    if(e.target.username.value===''||e.target.password.value===''||e.target.confirm.value===''){
      alert('please fill all field')
    }
    else if(e.target.password.value!==e.target.confirm.value){
      setErrorPassword(true);
    }
    else if(e.target.password.value===e.target.confirm.value){
        const user={
            username:e.target.username.value,
            password:e.target.password.value
          };
        const encoded=base64.encode(`${user.username}:${user.password}`)
    await axios.post('https://postgrees-srv.herokuapp.com/signin',{},{
        headers:{
            Authorization: `Basic ${encoded}`,
        }
    }).then(res=>{
        console.log("TOKEN>>",res.data);
        cookies.save('userId',res.data.id);
        cookies.save('userName', res.data.username);
        cookies.save('token',res.data.token);
        cookies.save('capabilities',res.data.capabilities);
        cookies.save('userRole',res.data.userRole);   
    handlerSign(true);
       setErrorPassword(false);
       setMessage(false);
    }).catch(error=>{
        console.log(error)
        setMessage(true);
    });

    }
 }
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
