import '@fontsource/montserrat/400.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme'

ReactDOM.render(
  <ChakraProvider theme={theme}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
);

reportWebVitals();
