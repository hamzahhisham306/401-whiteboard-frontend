import React from 'react'
import { Routes, Route } from "react-router-dom";
import Post from './Post'
import { useUserContext } from './Context';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { stateRedux } from '../store/redux';
import { useSelector } from 'react-redux';
function SingUp() {
  const { handlerSignUp } = useUserContext();
  const stateAuthRedux = useSelector(stateRedux);

  return (
    <>
      {!stateAuthRedux.isLogin &&
        <div className='form-signup' style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center' }} >
          <form onSubmit={handlerSignUp} >
            <div className='title'>
              <Heading textStyle='title' style={{ color: '#fff', marginBottom: '15px' }} >Create Account</Heading>
            </div>
            <FormControl >
              <FormLabel textStyle='lableStyle' fontSize='30px' htmlFor='name' color='#fff'>Username</FormLabel>
              <Input
                id='username'
                placeholder='username'
                type='text'
                backgroundColor='#fff'
                width='600px'
              />
              <FormLabel textStyle='lableStyle' fontSize='30px' htmlFor='name' color='#fff'>Email</FormLabel>
              <Input
                id='email'
                placeholder='email'
                type='email'
                backgroundColor='#fff'
                width='600px'
              />
              <FormLabel textStyle='lableStyle' fontSize='30px' htmlFor='name' color='#fff'>password</FormLabel>
              <Input
                id='password'
                placeholder='password'
                type='password'
                backgroundColor='#fff'
                width='600px'
              />
              <FormLabel textStyle='lableStyle' fontSize='30px' htmlFor='name' color='#fff'>confirm password</FormLabel>
              {stateAuthRedux.errorPassword && <p style={{ color: 'red' }}>password don't match</p>}
              <Input
                id='confirm'
                placeholder='password'
                type='password'
                backgroundColor='#fff'
                width='600px'
              />
            </FormControl>
            <select placeholder='role' id='userRole' style={{ marginTop: '20px' }}>
              <option value='user'>user</option>
              <option value='admin'>admin</option>
            </select>
            <Button mt={4} colorScheme='teal' type='submit' variant={['sm', 'md', 'lg']} display='block'>
              Submit
            </Button>
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

export default SingUp;
