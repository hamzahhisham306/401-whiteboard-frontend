import axios from "axios";
import { createContext ,useState} from "react";
import cookies from 'react-cookies';

export const userApi = createContext();

const UserMethodApi = (props) => {
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
  
  
        const handlerEdit=async(id)=>{
          setShow(true);
          console.log("from halder edit", typeof id);
          await axios.get(`https://postgrees-srv.herokuapp.com/post/${id}`).then((res)=>{
            setName(res.data.name);
            setAge(res.data.age);
            setId(res.data.id);
          })
          
        }

    const handlerSumitPost=async(e)=>{
        e.preventDefault();
        const newPost={
            name:e.target.name.value,
            age:e.target.age.value,
            ownerID:cookies.load('userId'),
        }
        console.log("new>>>",newPost);
    await axios.post('https://postgrees-srv.herokuapp.com/post',newPost,{
      headers:{
        Authorization:`Bearer ${cookies.load('token')} `
      }
     })
     e.target.reset();
    
     }

  const value = {handlerSumitPost, handleShow ,handlerEdit,deletePost, allPostWithComment,show,name,age,id,handleClose,setPost};

  return (
    <userApi.Provider value={value}>
      { props.children }
    </userApi.Provider>
  )
}

export default UserMethodApi