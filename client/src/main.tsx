import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterView from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  </React.StrictMode>,
);
