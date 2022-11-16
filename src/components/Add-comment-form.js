import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Nav from './Nav';
import cookies from 'react-cookies';
import {
  FormControl,
  FormLabel,
  Input,


} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

function Addcommentform({ nameUser }) {
  const { id } = useParams();
  const handlerSumitComment = async (e) => {
    e.preventDefault();
    const newComment = {
      descrption: e.target.descrption.value,
      Nationality: e.target.Nationality.value,
      postID: Number(id),
      userID: Number(cookies.load('userId')),
      username: cookies.load('userName')

    }
    await axios.post('https://postgrees-srv.herokuapp.com/comment', newComment)
    e.target.reset();
  }

  return (
    <div>
      <Nav nameUser={nameUser} />
      <form onSubmit={handlerSumitComment} >
        <Heading style={{ color: '#D6CDA4' }}  textStyle='title'>Form Comment</Heading>
        <FormControl >
          <FormLabel htmlFor='name' color='#fff'  textStyle='lableStyle'  fontSize='30px'>descrption</FormLabel>
          <Input
            id='descrption'
            placeholder='descrption'
            type='text'
            backgroundColor='#fff'
          />
          <FormLabel htmlFor='name' color='#fff'  textStyle='lableStyle'  fontSize='30px'>Nationality</FormLabel>
          <Input
            id='Nationality'
            placeholder='Nationality'
            type='text'
            backgroundColor='#fff'

          />
        </FormControl>
        <Button mt={4} colorScheme='teal' type='submit'>
          Submit
        </Button>
      </form>
      <Footer />
    </div>
  )
}

export default Addcommentform
