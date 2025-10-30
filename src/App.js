import React, { useState } from 'react';
import VeiculoForm from './components/VeiculoForm';
import VeiculoList from './components/VeiculoList';
import './App.css'; // Importa o CSS

function App() {
  const [currentVeiculo, setCurrentVeiculo] = useState(null);
  const [refreshList, setRefreshList] = useState(false);

  const handleEdit = (veiculo) => {
    setCurrentVeiculo(veiculo);
  };

  const handleSuccess = () => {
    setCurrentVeiculo(null); 
    setRefreshList(true); 
  };

  return (
    <div className="App">
      <header>
        <h1>CRUD Veículos Honda (React + Node.js)</h1>
      </header>
      
      <main className="container">
        <VeiculoForm 
          currentVeiculo={currentVeiculo} 
          onSuccess={handleSuccess} 
        />

        <VeiculoList 
          onEdit={handleEdit} 
          refresh={refreshList} 
          setRefresh={setRefreshList}
        />
      </main>
    </div>
  );
}

export default App;
