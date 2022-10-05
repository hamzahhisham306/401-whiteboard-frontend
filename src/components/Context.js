import React,{createContext, useContext, useState} from 'react';
import cookies from 'react-cookies';
import axios from 'axios';
import base64 from 'base-64';

const UserContext=createContext();
export const useUserContext=()=>useContext(UserContext);

const UserContextProvider=props=>{
 const [isSign, setSign]= useState(false);
 const [ErrorPassword, setErrorPassword]=useState(false);
 const [message, setMessage]=useState(false);
 const [canDoit, setDo]=useState(false);
 const [userInfo ,setUser]=useState({
  userId:'',
  userName:'',
  token:'',
  capabilities:[],
  userRole:''
 })


 const handlerSign=(boll)=>{
    setSign(boll);
        
  };
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        if(e.target.username.value===''||e.target.password.value===''||e.target.confirm.value===''){
          alert('please fill all field')
        }
        else if(e.target.password.value!==e.target.confirm.value){
          setErrorPassword(true);
        }
        else if(e.target.password.value===e.target.confirm.value){
            const user={
                username:e.target.username.value,
                password:e.target.password.value
              };
            const encoded=base64.encode(`${user.username}:${user.password}`)
        await axios.post('https://postgrees-srv.herokuapp.com/signin',{},{
            headers:{
                Authorization: `Basic ${encoded}`,
            }
        }).then(res=>{
            console.log("TOKEN>>",res.data);
            cookies.save('userId',res.data.id);
            cookies.save('userName', res.data.username);
            cookies.save('token',res.data.token);
            cookies.save('capabilities',res.data.capabilities);
            cookies.save('userRole',res.data.userRole);   

            setUser({
              userId:res.data.id,
              userName:res.data.username,
              token:res.data.token,
              capabilities:[res.data.capabilities],
              userRole:res.data.userRole
            })
        handlerSign(true);
           setErrorPassword(false);
           setMessage(false);
        }).catch(error=>{
            console.log(error)
            setMessage(true);
        });
        }
     }
     const handlerLogout=()=>{
      cookies.remove('token');
      cookies.remove('userName');
      cookies.remove('userId');
      cookies.remove('userRole');
      cookies.remove('capabilities');
      setUser({
        userId:'',
        userName:'',
        token:'',
        capabilities:'',
        userRole:''
      })
      handlerSign(false)
}
const canDo=()=>{
  if(cookies.load('userRole')==='admin'){
    setDo(true);
  }
  else{
    setDo(false);
  }
}
  return (
   <UserContext.Provider value={{ErrorPassword,userInfo, handlerSubmit,isSign,message,handlerSign,setSign, handlerLogout,canDo,canDoit}}>
         {props.children}
   </UserContext.Provider>
  )
}

export default UserContextProvider;
