import React from 'react';
import ReactDOM from 'react-dom/client';
import StateContextProvider from './context/StateContextProvider';
import App from './App';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>
);
