import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
