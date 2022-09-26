import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import cookies from 'react-cookies';
import ModalEdit from './Modal'
function Post({isSign, handlerSign,nameUser}) {
    const [allPostWithComment, setPost]=useState([]);
    const [show, setShow] = useState(false);
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [id,setId]=useState();
    const handleClose = () => {
      setShow(false);
      setName('');
      setAge('');
      setId('');
    };
    const handleShow = () => setShow(true);
    const deletePost=async(id)=>{
      if(window.confirm("Are you sure to delete?")){
        const res=await axios.delete(`https://postgrees-srv.herokuapp.com/post/${id}`,{
          headers:{
            Authorization: `Bearer ${cookies.load('token')}`,
        }
        });
        console.log(res.data);
        const resp=await axios.get('https://postgrees-srv.herokuapp.com/postWitheComment');
        console.log(resp.data);
        setPost(resp.data);
      }
      else{
        return '';
      }
        
    }
    const getAllData=async()=>{
        const res=await axios.get('https://postgrees-srv.herokuapp.com/postWitheComment');
        console.log(res.data);
        setPost(res.data);
        console.log("PSTO>>>>>",res.data)
        }
        useEffect(()=>{
            getAllData();
        },[])
        const handlerEdit=async(id)=>{
          setShow(true);
          console.log("from halder edit", typeof id);
          await axios.get(`https://postgrees-srv.herokuapp.com/post/${id}`).then((res)=>{
            setName(res.data.name);
            setAge(res.data.age);
            setId(res.data.id);
          })
          
        }

      
  
  return (
    <Container>
          <Nav  handlerSign={handlerSign} isSign={isSign} nameUser={nameUser}  />
         <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>age</th>
            <th>descrption</th>
            <th>Nationality</th>
            <th>Name of User who add the comment</th>
            <th>Add Comment</th>
            {cookies.load('userRole')==='admin'?<>
            <th>Delete Post</th>
            <th>Edit Post</th>   
            </> 
            :''}
        

          </tr>
        </thead>
        {allPostWithComment&&allPostWithComment.map((item,index)=>{
       return <tbody key={item.id}>  
          <tr>
            <td>{item.name} </td>
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
            {cookies.load('userRole')==='admin'?<>
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
