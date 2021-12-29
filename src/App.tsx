import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>...Loading</div>}>
          <MyRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
