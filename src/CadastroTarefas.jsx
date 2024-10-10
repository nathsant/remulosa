import React, { useState } from 'react'
import axios from 'axios'

const CadastroTarefa = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [usuarioId, setUsuarioId] = useState(null); // assume user is logged in and has an ID

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/tarefas', { titulo, descricao, status, usuarioId })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
      </label>
      <br />
      <label>
        Descrição:
        <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">Selecione</option>
          <option value="pendente">Pendente</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>
      </label>
      <br />
      <button type="submit">Cadastrar Tarefa</button>
    </form>
  );
};

export default CadastroTarefa