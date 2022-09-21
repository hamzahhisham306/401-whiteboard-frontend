import React,{useState} from 'react'
import axios from 'axios'
import  Nav from './Nav';
import Footer from './Footer';
function Addpostform({nameUser}) {
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
        <Nav nameUser={nameUser}/>
   <form className='create' onSubmit={handlerSumit}>
        <h3 style={{color:'#D6CDA4'}}>Form Post</h3>
        <label style={{color:'#EEF2E6'}}>name</label>
        <input
         type='text'
         onChange={(e)=>setName(e.target.value)}
         value={name}
         
        />
        <label style={{color:'#EEF2E6'}}>age</label>
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
