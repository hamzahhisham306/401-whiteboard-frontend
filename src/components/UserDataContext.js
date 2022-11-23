import axios from "axios";
import { createContext } from "react";
import cookies from 'react-cookies';
import { getData, AddPost, deleteSelectedPost } from "./postMethod/postMethod";
import { postRedux } from '../store/post';
import { useDispatch, useSelector } from 'react-redux';
import { NOT_SHOW, SET_AGE, SET_ID, SET_NAME, SHOW } from '../store/helper';
export const userApi = createContext();

const UserMethodApi = (props) => {
  const dispatchRedux = useDispatch();
  const dispatchHelper = useDispatch();
  const posts = useSelector(postRedux);


  const handleClose = () => {
    dispatchHelper(NOT_SHOW());
    dispatchHelper(SET_NAME(''));
    dispatchHelper(SET_AGE(''));
    dispatchHelper(SET_ID(''));
  };
  const handleShow = () => dispatchHelper(SHOW());
  const deletePost = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      deleteSelectedPost(dispatchRedux, id);
      getData(dispatchRedux);
    }
    else {
      return '';
    }
  }
  const handlerEdit = async (id) => {
    dispatchHelper(SHOW());
    await axios.get(`https://postgrees-srv.herokuapp.com/post/${id}`).then((res) => {
      dispatchHelper(SET_NAME(res.data.name));
      dispatchHelper(SET_AGE(res.data.age));
      dispatchHelper(SET_ID(res.data.id));
    })

  }

  const handlerSumitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      name: e.target.name.value,
      age: e.target.age.value,
      ownerID: cookies.load('userId'),
    }
    AddPost(dispatchRedux, newPost)
    e.target.reset();

  }
  const getAllData = async () => {
    // getData(dispatch)
    getData(dispatchRedux);

  }



  const value = { handlerSumitPost, getAllData, handleShow, handlerEdit, deletePost, handleClose, posts };
  return (
    <userApi.Provider value={value}>
      {props.children}
    </userApi.Provider>
  )
}

export default UserMethodApi