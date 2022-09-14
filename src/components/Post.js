import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Post() {
    const [allPostWithComment, setPost]=useState([]);
    const deletePost=async(id)=>{
        const res=await axios.delete(`https://seqlizer-server.herokuapp.com/post/${id}`);
        console.log(res.data);
        const resp=await axios.get('https://seqlizer-server.herokuapp.com/postWitheComment');
        console.log(resp.data);
        setPost(resp.data);
    }
    const getAllData=async()=>{
        const res=await axios.get('https://seqlizer-server.herokuapp.com/postWitheComment');
        console.log(res.data);
        setPost(res.data);
        }
        useEffect(()=>{
            getAllData();
        },[])
  
  return (
    <Container>
          <Nav/>
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>age</th>
            <th>descrption</th>
            <th>Nationality</th>
          </tr>
        </thead>
        {allPostWithComment&&allPostWithComment.map((item,index)=>{
       return <tbody key={item.id}>  
          <tr>
            <td>{item.name} </td>
            <td>{item.age}</td>
            <td>{item.Comments[0]?.descrption}</td>
            <td>{item.Comments[0]?.Nationality}</td>
            <td><Link to={'/formComment/'+item.id}><button>add Comments</button></Link></td>
            <td><button onClick={()=>deletePost(item.id)}>Delete Post</button></td>
          </tr>
        </tbody>
      })}
            </Table>
   <Footer/>
    </Container>
  )
}

export default Post
