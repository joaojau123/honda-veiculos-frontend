import axios from 'axios';

// *** ATENÇÃO: ESSA URL DEVE SER MUDADA APÓS O DEPLOY DO BACK-END! ***
// Para desenvolvimento local:
const baseURL = 'https://honda-veiculos-backend.onrender.com/api/veiculos';
    
// Exemplo de como ficará após o deploy no Render:
// const baseURL = 'https://honda-veiculos-backend.onrender.com/api/veiculos';

const api = axios.create({
  baseURL: baseURL,
});

export default api;
