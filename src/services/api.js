// src/services/api.js
import axios from 'axios';

// Se a URL do Render é: https://honda-veiculos-backend.onrender.com
const baseURL = 'https://honda-veiculos-backend.onrender.com/api/veiculos'; 
// ^^^^^^^^^^^^^^^^^^^^^^^ Sua URL real aqui! ^^^^^^^^^^^^^^^^^^^^^^^^^^

const api = axios.create({
  baseURL: baseURL,
});

export default api;
