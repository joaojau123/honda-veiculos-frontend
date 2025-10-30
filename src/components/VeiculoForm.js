import React, { useState, useEffect } from 'react';
import api from '../services/api';

function VeiculoForm({ currentVeiculo, onSuccess }) {
  const initialState = { modelo: '', ano: '', cor: '', preco: '' };
  const [veiculo, setVeiculo] = useState(initialState);

  useEffect(() => {
    if (currentVeiculo) {
      setVeiculo({ ...currentVeiculo, preco: String(currentVeiculo.preco) }); 
    } else {
      setVeiculo(initialState);
    }
  }, [currentVeiculo]);

  const handleChange = (e) => {
    setVeiculo({ ...veiculo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
          ...veiculo,
          ano: parseInt(veiculo.ano), 
          preco: parseFloat(veiculo.preco) 
      };

      if (currentVeiculo) {
        // Update (Atualizar)
        await api.put(`/${currentVeiculo.id}`, dataToSend);
      } else {
        // Create (Criar)
        await api.post('/', dataToSend);
      }
      
      setVeiculo(initialState);
      onSuccess(); 
    } catch (error) {
      alert(`Erro ao salvar veículo Honda: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <div className="card">
        <h3>{currentVeiculo ? 'Atualizar Veículo' : 'Cadastrar Novo Veículo'} Honda</h3>
        <form onSubmit={handleSubmit} className="veiculo-form">
        
        <label>Modelo:</label>
        <input type="text" name="modelo" value={veiculo.modelo} onChange={handleChange} required />
        
        <label>Ano:</label>
        <input type="number" name="ano" value={veiculo.ano} onChange={handleChange} required min="1900" max="2100" />
        
        <label>Cor:</label>
        <input type="text" name="cor" value={veiculo.cor} onChange={handleChange} required />
        
        <label>Preço (R$):</label>
        <input type="number" name="preco" value={veiculo.preco} onChange={handleChange} step="0.01" required min="0.01" />

        <button type="submit">{currentVeiculo ? 'Salvar Alterações' : 'Cadastrar'}</button>
        {currentVeiculo && (
            <button type="button" onClick={() => setVeiculo(initialState)} className="cancel-button">
                Cancelar Edição
            </button>
        )}
        </form>
    </div>
  );
}

export default VeiculoForm;
