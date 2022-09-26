import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav';
import cookies from 'react-cookies';
function Addcommentform({nameUser}) {
    const {id}=useParams();
    const [descrption, setDescrption]=useState('');
    const [Nationality, setNationlity]=useState('');
     
     const handlerSumit=async(e)=>{
        e.preventDefault();
        const Iduser=cookies.load('userId')
     
    
        const newComment={
            descrption:descrption,
            Nationality:Nationality,
            postID:Number(id),
            userID:Iduser,
            username:cookies.load('userName')

        }
     const res= await axios.post('https://postgrees-srv.herokuapp.com/comment',newComment)
     console.log("from comments",res.data);
    
     setDescrption('');
     setNationlity('')
     }
 
  return (
    <div>
        <Nav nameUser={nameUser}/>
    <form className='create' onSubmit={handlerSumit}>
         <h3 style={{color:'#D6CDA4'}}>Form Comment</h3>
         <label style={{color:'#EEF2E6'}}>descrption</label>
         <input
          type='text'
          onChange={(e)=>setDescrption(e.target.value)}
          value={descrption}
         />
         <label style={{color:'#EEF2E6'}} >Nationality</label>
         <input
         type='text'
         onChange={(e)=>setNationlity(e.target.value)}
         value={Nationality}
         />
         <label style={{color:'#EEF2E6'}}>id Post</label>
         <input
         type='number'
         defaultValue={Number(id)}
         />
         <button type='submit'>Sumit</button>
 
     </form>    
     <Footer/>
     </div>
  )
}

export default Addcommentform
