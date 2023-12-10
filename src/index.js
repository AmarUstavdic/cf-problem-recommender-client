import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// TODO: Figure out what is this StrictMode

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
