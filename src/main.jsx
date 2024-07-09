import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartContext } from './context/CartContext.jsx';
import App from './App.jsx';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </React.StrictMode>
);
