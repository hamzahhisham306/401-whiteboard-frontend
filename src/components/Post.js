import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import cookies from 'react-cookies';
import ModalEdit from './Modal'
import {useUserContext} from './Context';
import {userApi} from './UserDataContext';

    /* istanbul ignore next */
function Post() {
    const {canDoit}=useUserContext();
    const {handleShow ,handlerEdit, deletePost, allPostWithComment,show,name,age,id,handleClose,setPost}=useContext(userApi);
    const getAllData=async()=>{
      const res=await axios.get('https://postgrees-srv.herokuapp.com/postWitheComment');
      console.log(res.data);
      setPost(res.data);
      console.log("PSTO>>>>>",res.data)
      }
        useEffect(()=>{
          getAllData();
      },[])

      
      /* istanbul ignore next */
  return (
    <Container>
          <Nav    />
         <Table striped bordered hover>
        <thead>
          <tr>
            <th data-testid='first'>First Name</th>
            <th data-testid='age'>age</th>
            <th data-testid='descrption'>descrption</th>
            <th data-testid='Nationality'>Nationality</th>
            <th data-testid='Name of User who add the comment'>Name of User who add the comment</th>
            <th>Add Comment</th>
            
            <th>Delete Post</th>
            <th>Edit Post</th>   
          
        

          </tr>
        </thead>
        {allPostWithComment&&allPostWithComment.map((item,index)=>{
       return <tbody key={item.id}>  
          <tr>
            <td data-testid='Name'>{item.name} </td>
            <td>{item.age}</td>
            <td>{item.usercomms?.map((data)=>{
           return ( <li key={Math.floor(Math.random()*1000)} >
              {data.descrption}
              </li>
           )
            })}<br/>
            </td>
            <td>{item.usercomms?.map((data)=>{
           return ( <li key={Math.floor(Math.random()*1000)} >
              {data.Nationality}
              </li>
           )
            })}<br/>
            </td>

            <td>{item.usercomms?.map((data)=>{
           return ( <li key={Math.floor(Math.random()*1000)} >
              {data.username}
              </li>
           )
            })}<br/>
            </td>
            <td><Link to={'/formComment/'+item.id}><button>add Comments</button></Link></td>
            {console.log("SS", Number(cookies.load('userId')), item.id)}
            {canDoit||Number(cookies.load('userId'))===item.ownerID?<>
            <td><button onClick={()=>deletePost(item.id)}>Delete Post</button></td>
            <td><button onClick={()=>handlerEdit(item.id)} >Edit Post</button></td>
            <ModalEdit setPost={setPost} show={show}  handleClose={handleClose} handleShow={handleShow} name={name} age={age} id={id} getAllData={getAllData}/>
            </>:''
           } 

                      </tr>
        </tbody>
      })}

       </Table>
   <Footer/>
    </Container>
  )
}

export default Post
