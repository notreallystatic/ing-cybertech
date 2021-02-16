import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './utils';

const AppWrapper = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
