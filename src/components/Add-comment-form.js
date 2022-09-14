import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav';
function Addcommentform() {
    const {id}=useParams();
    const [descrption, setDescrption]=useState('');
    const [Nationality, setNationlity]=useState('');
     
     const handlerSumit=async(e)=>{
        e.preventDefault();
        const newComment={
            descrption:descrption,
            Nationality:Nationality,
            idComment:Number(id),
        }
     const res= await axios.post('https://seqlizer-server.herokuapp.com/comment',newComment)
     console.log(res);
     setDescrption('');
     setNationlity('')
     }
 
  return (
    <div>
        <Nav/>
    <form className='create' onSubmit={handlerSumit}>
         <h3>Form Comment</h3>
         <label>descrption</label>
         <input
          type='text'
          onChange={(e)=>setDescrption(e.target.value)}
          value={descrption}
         />
         <label>Nationality</label>
         <input
         type='text'
         onChange={(e)=>setNationlity(e.target.value)}
         value={Nationality}
         />
         <label>id Post</label>
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
