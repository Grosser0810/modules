import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, CircularProgress } from '@mui/material';
import lightTheme from './shared/utils/assets/themes/light';
import darkTheme from './shared/utils/assets/themes/dark';
import { MyRoutes } from './routes';
import './shared/utils/assets/themes/css/globalStyles.css';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<CircularProgress color="error"/>}>
            <MyRoutes/>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
