
import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Addpostform from './components/Add-post-form'
import Addcommentform from './components/Add-comment-form';
import SingUp from './components/SingUp';
import Signin from './components/Signin';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies';

function App() {
  const [isSign, setSign]= useState(false);
  const handlerSign=(boll)=>{
    setSign(boll);
        
  };
  useEffect(()=>{
    if(cookies.load('token')){
      setSign(true);
    }
  },[]);
  return (
    <Container className="App">
      <Routes>
     <Route
      path='/formPost'
      element={<Addpostform />}
     />
    <Route
      path='/'
      element={<Signin handlerSign={handlerSign} isSign={isSign} />}
     />
    
    <Route
      path='/formComment/:id'
      element={<Addcommentform/>}
     />
      <Route
      path='/SingUp'
      element={<SingUp/>}
     />
     <Route
      path='/Post'
      element={<Post handlerSign={handlerSign} isSign={isSign}/>}
     />
    </Routes>

    </Container>
  );
}

export default App;
