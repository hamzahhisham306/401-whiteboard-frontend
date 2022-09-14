import React,{useState} from 'react'
import axios from 'axios'
import  Nav from './Nav';
import Footer from './Footer';
function Addpostform() {
    const [name, setName]=useState('');
    const [age, setAge]=useState();
     
     const handlerSumit=async(e)=>{
        e.preventDefault();
        const newPost={
            name:name,
            age:age,
        }
     const res= await axios.post('https://seqlizer-server.herokuapp.com/post',newPost)
     console.log(res);
     setName('');
     setAge('');
     }

  return (
    <div>
        <Nav/>
   <form className='create' onSubmit={handlerSumit}>
        <h3>Form Post</h3>
        <label>name</label>
        <input
         type='text'
         onChange={(e)=>setName(e.target.value)}
         value={name}
         
        />
        <label>age</label>
        <input
        type='number'
        max='130'
        min='0'
        onChange={(e)=>setAge(e.target.value)}
        value={age}
       
        />
        <button type='submit'>Sumit</button>

    </form>  
    <Footer/>
      </div>
  )
}

export default Addpostform
