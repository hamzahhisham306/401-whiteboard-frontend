
import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";
import Addpostform from './components/Add-post-form'
import Addcommentform from './components/Add-comment-form';
import SingUp from './components/SingUp';
import Signin from './components/Signin';
import Post from './components/Post';
import { useEffect } from 'react';
import cookies from 'react-cookies';
import { useUserContext } from './components/Context';
import { AuthAction } from './components/actions/AuthAction';
function AppMain() {

  const { dispatch2 } = useUserContext();


  useEffect(() => {
    if (cookies.load('token')) {
      dispatch2({ type: AuthAction.KEEP_LOGIN })
    }
  }, []);
  return (
    <Container className="App">
      <Routes>
        <Route
          path='/formPost'
          element={<Addpostform />}
        />
        <Route
          path='/'
          element={<Signin />}
        />

        <Route
          path='/formComment/:id'
          element={<Addcommentform />}
        />
        <Route
          path='/SingUp'
          element={<SingUp />}
        />
        <Route
          path='/Post'
          element={<Post />}
        />
      </Routes>

    </Container>
  )
}

export default AppMain
