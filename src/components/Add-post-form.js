import React, { useContext } from 'react'
import Nav from './Nav';
import Footer from './Footer';
import { userApi } from './UserDataContext';
import {
  FormControl,
  FormLabel,
  Input,
  

} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

function Addpostform() {
  const { handlerSumitPost } = useContext(userApi);



  return (
    <div>
      <Nav />
      <form onSubmit={handlerSumitPost}>
      <FormControl >
        <FormLabel htmlFor='name' color='#fff'  textStyle='lableStyle'  fontSize='30px'>First name</FormLabel>
        <Input
          id='name'
          placeholder='name'
          type='text'
          backgroundColor='#fff'
        />
    <FormLabel htmlFor='name' color='#fff'  textStyle='lableStyle'  fontSize='30px'>age</FormLabel>
        <Input
          id='age'
          placeholder='age'
          type='number'
          backgroundColor='#fff'

        />
      </FormControl>
      <Button mt={4} colorScheme='teal'  type='submit'>
        Submit
      </Button>
    </form>

      <Footer />
    </div>
  )
}

export default Addpostform
