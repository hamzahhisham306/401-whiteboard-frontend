import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import cookies from 'react-cookies';


function ModalEdit(props) {
  const [updateName, setName] = useState('');
  const [updateAge, setAge] = useState('');

  const hadlerUpdate = async (id) => {
    let data = {
      name: updateName,
      age: updateAge,
      ownerID: cookies.load('userId'),
    }
    await axios.put(`https://postgrees-srv.herokuapp.com/post/${id}`, data, {
      headers: {
        Authorization: `Bearer ${cookies.load('token')}`,
      }
    }).then((res) => {
      props.getAllData();
    })

  }

  return (
    <>
      <Modal show={props.helper} onHide={props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <form style={{ textAlign: 'center', margin: "20px auto" }} onSubmit={hadlerUpdate}>
          <input placeholder='Edit name' style={{ width: '300px', outline: 'none' }} defaultValue={props?.name} onChange={(e) => setName(e.target.value)} /><br></br>
          <input placeholder='Edit age' style={{ width: '300px', outline: 'none' }} defaultValue={props?.age} onChange={(e) => setAge(e.target.value)} />
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ backgroundColor: '#1aac83' }} onClick={() => { hadlerUpdate(Number(props?.id)) }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalEdit;
