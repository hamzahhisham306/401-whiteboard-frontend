import React ,{useContext}from 'react'
import  Nav from './Nav';
import Footer from './Footer';
import {userApi} from './UserDataContext';
function Addpostform() {
  const {handlerSumitPost}=useContext(userApi);
   
     

  return (
    <div>
        <Nav />
   <form className='create' onSubmit={handlerSumitPost}>
        <h3 style={{color:'#D6CDA4'}}>Form Post</h3>
        <label style={{color:'#EEF2E6'}}>name</label>
        <input
        id='name'
         type='text'
         data-testid='Name-input'
        />
        <label style={{color:'#EEF2E6'}}>age</label>
        <input
        type='number'
        max='130'
        min='0'
        id='age'
        />
        <button type='submit'>Sumit</button>

    </form>  
    <Footer/>
      </div>
  )
}

export default Addpostform
