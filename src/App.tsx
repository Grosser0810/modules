import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { MyRoutes } from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<CircularProgress color='error' />}>
          <MyRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
