import React from 'react'
import axios from 'axios'
import  Nav from './Nav';
import Footer from './Footer';
import cookies from 'react-cookies'
function Addpostform({nameUser}) {
    // const [name, setName]=useState('');
    // const [age, setAge]=useState();
  
   
     
     const handlerSumit=async(e)=>{
        e.preventDefault();

        const newPost={
            name:e.target.name.value,
            age:e.target.age.value,
            ownerID:cookies.load('userId'),
        }
        console.log("new>>>",newPost);
    await axios.post('https://postgrees-srv.herokuapp.com/post',newPost,{
      headers:{
        Authorization:`Bearer ${cookies.load('token')} `
      }
     })
     e.target.reset();
    //  setName('');
    //  setAge('');
     }

  return (
    <div>
        <Nav nameUser={nameUser}/>
   <form className='create' onSubmit={handlerSumit}>
        <h3 style={{color:'#D6CDA4'}}>Form Post</h3>
        <label style={{color:'#EEF2E6'}}>name</label>
        <input
        id='name'
         type='text'
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
