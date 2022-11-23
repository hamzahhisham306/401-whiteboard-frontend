import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Post from './Post';
import { useUserContext } from './Context';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import {stateRedux} from '../store/redux';
import { useSelector } from 'react-redux';
function Signin() {
  const { handlerSubmit } = useUserContext();
  const stateAuthRedux = useSelector(stateRedux);

  return (
    <>
      {!stateAuthRedux.isLogin&&
      <div className='form-signup' style={{paddingTop:'150px', display:'flex', justifyContent:'center'}} >
       <form  onSubmit={handlerSubmit} >
  
      <Heading  textStyle='title' style={{ color: '#D6CDA4', paddingBottom:'30px' }}>Login Form</Heading>
      <FormControl >
        <FormLabel textStyle='lableStyle'  fontSize='30px' htmlFor='name' color='#fff'>Username</FormLabel>
        <Input
          id='username'
          placeholder='username'
          type='text'
          backgroundColor='#fff'
          width='600px'
        />
    <FormLabel textStyle='lableStyle'  fontSize='30px' htmlFor='name' color='#fff'>password</FormLabel>
        <Input
          id='password'
          placeholder='password'
          type='password'
          backgroundColor='#fff'
          width='600px'
        />
           <FormLabel textStyle='lableStyle'  fontSize='30px' htmlFor='name' color='#fff'>confirm password</FormLabel>
           {stateAuthRedux.errorPassword && <p style={{ color: 'red' }}>password don't match</p>}
          {stateAuthRedux.message && <p style={{ color: 'red' }}>Invalid login</p>}
        <Input
          id='confirm'
          placeholder='password'
          type='password'
          backgroundColor='#fff'
          width='600px'


        />
      </FormControl>
      <Button mt={4} colorScheme='teal'   variant={['sm', 'md', 'lg']} type='submit'>
        Submit
      </Button>
      <Link to='/SingUp'><Button mt={4} colorScheme='teal' display='block' >Sign Up</Button></Link>

    </form>
    </div>}
      {stateAuthRedux.isLogin && <Routes>
        <Route
          path='/'
          element={<Post />}
        />
      </Routes>}
    </>
  )
}

export default Signin;
