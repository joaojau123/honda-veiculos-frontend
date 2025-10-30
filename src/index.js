// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; 
import App from './App';

// Verifica se o elemento 'root' existe antes de criar o render
const rootElement = document.getElementById('root'); 

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); 
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
} else {
    console.error("Elemento 'root' não encontrado no HTML.");
}
