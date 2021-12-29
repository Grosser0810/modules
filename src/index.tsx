import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { light } from './shared/utils/assets/themes/maps';
import lightTheme from './shared/utils/assets/themes/light';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
    {/*  <CssBaseline />*/}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
