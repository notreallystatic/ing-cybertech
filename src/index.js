import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import './index.css';

const AppWrapper = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
