import React, { useContext, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import cookies from 'react-cookies';
import ModalEdit from './Modal'
import { useUserContext } from './Context';
import { userApi } from './UserDataContext';

/* istanbul ignore next */
function Post() {
  const { stateAuth } = useUserContext();
  const { handleShow, handlerEdit, deletePost,helper, handleClose, setPost, getAllData, state } = useContext(userApi);

  useEffect(() => {
    getAllData();
  }, [])


  /* istanbul ignore next */
  return (
    <Container>
      <Nav />
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
        {state && state.map((item, index) => {
          return <tbody key={item.id}>
            <tr>
              <td data-testid='Name'>{item.name} </td>
              <td>{item.age}</td>
              <td>{item.usercomms?.map((data) => {
                return (<li key={Math.floor(Math.random() * 1000)} >
                  {data.descrption}
                </li>
                )
              })}<br />
              </td>
              <td>{item.usercomms?.map((data) => {
                return (<li key={Math.floor(Math.random() * 1000)} >
                  {data.Nationality}
                </li>
                )
              })}<br />
              </td>

              <td>{item.usercomms?.map((data) => {
                return (<li key={Math.floor(Math.random() * 1000)} >
                  {data.username}
                </li>
                )
              })}<br />
              </td>
              <td><Link to={'/formComment/' + item.id}><button>add Comments</button></Link></td>
              {stateAuth.canDO || Number(cookies.load('userId')) === item.ownerID ? <>
                <td><button onClick={() => deletePost(item.id)}>Delete Post</button></td>
                <td><button onClick={() => handlerEdit(item.id)} >Edit Post</button></td>
                <ModalEdit setPost={setPost} helper={helper} handleClose={handleClose} handleShow={handleShow} name={helper.name} age={helper.age} id={helper.id} getAllData={getAllData} />
              </> : ''
              }

            </tr>
          </tbody>
        })}

      </Table>
      <Footer />
    </Container>
  )
}

export default Post
