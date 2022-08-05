import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
