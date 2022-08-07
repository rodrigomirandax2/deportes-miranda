import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider >
      <NavBar />
  </ChakraProvider>
  
);
reportWebVitals();
