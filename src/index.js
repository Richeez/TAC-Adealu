import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fontAwesome';
dom.watch()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

