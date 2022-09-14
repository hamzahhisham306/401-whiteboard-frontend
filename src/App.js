
import './App.css';
import Post from './components/Post';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Addpostform from './components/Add-post-form'
import Addcommentform from './components/Add-comment-form';

function App() {
  return (
    <Container className="App">
      <Routes>
     <Route
      path='/formPost'
      element={<Addpostform/>}
     />
    <Route
      path='/'
      element={<Post/>}
     />
    <Route
      path='/formComment/:id'
      element={<Addcommentform/>}
     />
    </Routes>

    </Container>
  );
}

export default App;
