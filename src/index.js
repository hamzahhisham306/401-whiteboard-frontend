import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import UserMethodApi from './components/UserDataContext';
import { ChakraProvider, extendTheme, ColorModeScript  } from '@chakra-ui/react';
import { myTheme } from './components/theme/theme'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({ config })
root.render(
  <BrowserRouter>
    <UserMethodApi>
      <ChakraProvider theme={myTheme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </UserMethodApi>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
