import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Webapp from './webapp';
import theme from './webapp/theme';



ReactDOM.render(
  <React.StrictMode>
    <Webapp>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Webapp>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
