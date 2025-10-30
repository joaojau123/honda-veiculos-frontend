import React from 'react';
import ReactDOM from 'react-dom/client';
// Opcional: Se você não criou um index.css, remova esta linha ou crie o arquivo vazio
import './App.css'; 
import App from './App';

// Cria a raiz da aplicação no elemento com id="root"
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
