import React from 'react';
import ReactDOM from 'react-dom/client'; // Importamos 'createRoot' desde ReactDOM
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Creamos el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

