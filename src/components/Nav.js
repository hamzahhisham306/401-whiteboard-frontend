import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import cookies from 'react-cookies';
import { useUserContext } from './Context';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
function ListExample() {
  const { handlerLogout } = useUserContext();
  return (
    <>
      <UnorderedList display='flex' transition='0.5s' listStyleType='none' paddingTop='100px' paddingBottom='50px' color='#fff'>
        <Link to='/Post'><ListItem marginLeft='20px'>Home</ListItem></Link>
        <Link to='/formPost'><ListItem marginLeft='20px'>Form Post</ListItem></Link>
        <Link to='/'><ListItem marginLeft='20px' onClick={handlerLogout} >LogOut</ListItem></Link>
        <ListItem marginLeft='20px'>Hi,  {cookies.load('userName')} </ListItem>
        <ListItem marginLeft='20px'>  Contact Us </ListItem>
      </UnorderedList>
    </>

  );
}

export default ListExample;