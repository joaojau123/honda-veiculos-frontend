import React, { useState, useEffect } from 'react';
import api from '../services/api';

function VeiculoList({ onEdit, refresh, setRefresh }) {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetchVeiculos();
  }, [refresh]);

  const fetchVeiculos = async () => {
    try {
      const response = await api.get('/'); // Retrieve (Listar)
      setVeiculos(response.data);
      setRefresh(false);
    } catch (error) {
      console.error('Erro ao buscar veículos Honda:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este veículo Honda?')) {
      try {
        await api.delete(`/${id}`); // Delete (Remover)
        fetchVeiculos();
      } catch (error) {
        alert('Erro ao remover veículo Honda.');
      }
    }
  };

  return (
    <div className="card">
      <h3>Veículos Honda Cadastrados</h3>
      <table className="veiculo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Preço (R$)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.modelo}</td>
              <td>{v.ano}</td>
              <td>{v.cor}</td>
              <td>{v.preco.toFixed(2).replace('.', ',')}</td>
              <td>
                <button onClick={() => onEdit(v)} className="edit-button">
                  Editar (Update)
                </button>
                <button onClick={() => handleDelete(v.id)} className="delete-button">
                  Remover (Delete)
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {veiculos.length === 0 && <p>Nenhum veículo Honda cadastrado.</p>}
    </div>
  );
}

export default VeiculoList;
