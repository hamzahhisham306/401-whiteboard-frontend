import React, { useContext, useEffect } from 'react'
// import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import cookies from 'react-cookies';
import ModalEdit from './Modal'
import { useUserContext } from './Context';
import { userApi } from './UserDataContext';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

/* istanbul ignore next */
function Post() {
  const { stateAuth } = useUserContext();
  const { handleShow, handlerEdit, deletePost, helper, handleClose, setPost, getAllData,posts } = useContext(userApi);
  

  useEffect(() => {
    getAllData();
  }, [])


  /* istanbul ignore next */
  return (
    <Container>
      <Nav />
      {/* <TableContainer> */}
      <Table variant='simple' colorScheme='teal'>
        <TableCaption color='#D6CDA4'>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr >
            <Th textStyle='liText' color='#D6CDA4' fontSize='15px' letterSpacing='2px'>First Name</Th>
            <Th textStyle='liText' isNumeric color='#D6CDA4' fontSize='15px' letterSpacing='2px'>age</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>descrption</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>Nationality</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>Name of User who add the comment</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>Add Comment</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>Delete Post</Th>
            <Th color='#D6CDA4' fontSize='15px' letterSpacing='2px'>Edit Post</Th>
          </Tr>
        </Thead>
        {posts && posts.map((item, index) => {
          return <Tbody key={item.id}>
            <Tr>
              <Td textStyle='liText'>{item.name}</Td>
              <Td textStyle='liText'>{item.age}</Td>
              <Td textStyle='liText'>{item.usercomms?.map((data) => {
                return (<li key={Math.floor(Math.random() * 1000)} style={{ listStyleType: 'none', marginBottom: '-15px' }} >

                  {data.descrption}
                </li>
                )
              })}<br />
              </Td>
              <Td textStyle='liText'>
                {item.usercomms?.map((data) => {
                  return (<li key={Math.floor(Math.random() * 1000)} style={{ listStyleType: 'none', marginBottom: '-15px' }} >
                    {data.Nationality}
                  </li>
                  )
                })}<br />
              </Td>
              <Td textStyle='liText'>
                {item.usercomms?.map((data) => {
                  return (<li key={Math.floor(Math.random() * 1000)} style={{ listStyleType: 'none', marginBottom: '-15px' }}>
                    {data.username}
                  </li>
                  )
                })}<br />
              </Td>
              <Td><Link to={'/formComment/' + item.id}><Button colorScheme='teal' variant='solid'>add Comments</Button></Link></Td>
              {stateAuth.canDO || Number(cookies.load('userId')) === item.ownerID || cookies.load('userRole') === 'admin' ? <>
                <Td><Button onClick={() => deletePost(item.id)} colorScheme='teal' variant='solid'>Delete Post</Button></Td>
                <Td><Button onClick={() => handlerEdit(item.id)} colorScheme='teal' variant='solid'>Edit Post</Button></Td>
                <ModalEdit setPost={setPost} helper={helper} handleClose={handleClose} handleShow={handleShow} name={helper.name} age={helper.age} id={helper.id} getAllData={getAllData} />
              </> : ''
              }
            </Tr>
          </Tbody>
        })}
      </Table>

      <Footer />
    </Container>
  )
}

export default Post
