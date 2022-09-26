import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav';
import cookies from 'react-cookies';
function Addcommentform({nameUser}) {
    const {id}=useParams();
    // const [descrption, setDescrption]=useState('');
    // const [Nationality, setNationlity]=useState('');
     
     const handlerSumit=async(e)=>{
        e.preventDefault();
    
     
    
        const newComment={
            descrption:e.target.descrption.value,
            Nationality:e.target.Nationality.value,
            postID:Number(id),
            userID:Number(cookies.load('userId')),
            username:cookies.load('userName')

        }
        console.log("newComment>>>>>>>>>>",newComment)
      await axios.post('https://postgrees-srv.herokuapp.com/comment',newComment)    
    e.target.reset();
     }
 
  return (
    <div>
        <Nav nameUser={nameUser}/>
    <form className='create' onSubmit={handlerSumit}>
         <h3 style={{color:'#D6CDA4'}}>Form Comment</h3>
         <label style={{color:'#EEF2E6'}}>descrption</label>
         <input
          type='text'
         id='descrption'
         />
         <label style={{color:'#EEF2E6'}} >Nationality</label>
         <input
         type='text'
         id='Nationality'
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
