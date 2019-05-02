import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

import { COLOR_BG_LIGHT_GRAY, FONT_PRIMARY } from './constants/cssVars';

import 'normalize.css';
import './base-style.css';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${COLOR_BG_LIGHT_GRAY};
    padding:15px 16px;
    min-width: 320px;
  }
  h1{
    font-family:${FONT_PRIMARY};
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  #root{
    max-width: 1131px;
    margin: 0 auto;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
