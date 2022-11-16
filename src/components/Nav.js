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
        <Link to='/Post'><ListItem textStyle='liText' marginLeft='20px'>Home</ListItem></Link>
        <Link to='/formPost'><ListItem textStyle='liText' marginLeft='20px'>Form Post</ListItem></Link>
        <Link to='/'><ListItem marginLeft='20px' textStyle='liText' onClick={handlerLogout} >LogOut</ListItem></Link>
        <ListItem textStyle='liText' marginLeft='20px'>Hi,  {cookies.load('userName')} </ListItem>
        <ListItem textStyle='liText' marginLeft='20px'>  Contact Us </ListItem>
      </UnorderedList>
    </>

  );
}

export default ListExample;