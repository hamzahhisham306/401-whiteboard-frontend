import axios from "axios";
import { createContext, useReducer } from "react";
import cookies from 'react-cookies';
import { postState } from "./actions/postAction";
import { postReducer } from "./reducer/postReducer";
import { getData, AddPost, deleteSelectedPost } from "./postMethod/postMethod";
import { helperReducer } from "./reducer/helperReducer";
import { helperIntial } from "./actions/helperAction";
import { helperAction } from "./actions/helperAction";
export const userApi = createContext();

const UserMethodApi = (props) => {

  
  const [state, dispatch] = useReducer(postReducer, postState);
  const [helper, dispatch3] = useReducer(helperReducer, helperIntial);
  const handleClose = () => {
    dispatch3({ type: helperAction.NOT_SHOW });
    dispatch3({ type: helperAction.SET_NAME, payload:'' });
    dispatch3({ type: helperAction.SET_AGE, payload: ''});
    dispatch3({ type: helperAction.SET_ID, payload: '' });
  };
  const handleShow = () => dispatch3({ type: helperAction.SHOW });
  const deletePost = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      deleteSelectedPost(dispatch, id)
      getData(dispatch);
    }
    else {
      return '';
    }
  }
  const handlerEdit = async (id) => {
    dispatch3({ type: helperAction.SHOW });
    await axios.get(`https://postgrees-srv.herokuapp.com/post/${id}`).then((res) => {
      dispatch3({ type: helperAction.SET_NAME, payload: res.data.name });
      dispatch3({ type: helperAction.SET_AGE, payload: res.data.age });
      dispatch3({ type: helperAction.SET_ID, payload: res.data.id });
    })

  }

  const handlerSumitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      name: e.target.name.value,
      age: e.target.age.value,
      ownerID: cookies.load('userId'),
    }
    AddPost(dispatch, newPost)
    e.target.reset();

  }
  const getAllData = async () => {
    getData(dispatch)
  }



  const value = { handlerSumitPost, state, helper, getAllData, handleShow, handlerEdit, deletePost, handleClose };
  return (
    <userApi.Provider value={value}>
      {props.children}
    </userApi.Provider>
  )
}

export default UserMethodApi