import React from "react";
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signin from '../components/Signin';
import Nav from '../components/Nav';
import Post from "../components/Post";


xtest('check Nav', async()=>{
    render(<Nav/>);
    const link= screen.getByTestId('logout');
    const Home=screen.getByTestId('Home');
    const form=screen.getByTestId('form');

    expect(link).toHaveTextContent('LogOut');
    expect(Home).toHaveTextContent('Home');
    expect(form).toHaveTextContent('Form Post');


  });

xtest('Check post page',async()=>{
    render(<Post/>);

    const first= screen.getByTestId('first');
    const age=screen.getByTestId('age');
    const descrption=screen.getByTestId('descrption');
    const Nationality=screen.getByTestId('Nationality');

    expect(first).toHaveTextContent('First Name');
    expect(age).toHaveTextContent('age');
    expect(descrption).toHaveTextContent('descrption')
    expect(Nationality).toHaveTextContent('Nationality')
    expect(Nationality).toHaveTextContent('Nationality')


})

xtest('check Login', async()=>{
    render(<Signin/>);
    const input= screen.getByTestId('Name-input');
    const inputPassword=screen.getByTestId('password-input');

    fireEvent.change(input, { target: { value: 'qais@test.com' } });
    fireEvent.change(inputPassword, { target: { value: '123' } });
  });