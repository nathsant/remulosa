const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
})

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
    return
  }
  console.log('Conectado ao banco de dados com sucesso!')
})

app.use(express.json());

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao cadastrar usuário' })
    } else {
      res.send({ message: 'Usuário cadastrado com sucesso' })
    }
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
  app.post('/tarefas', (req, res) => {
  const { titulo, descricao, status, usuarioId } = req.body;
  const query = 'INSERT INTO tarefas (titulo, descricao, status, usuario_id) VALUES (?, ?, ?, ?)';
  db.query(query, [titulo, descricao, status, usuarioId], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao cadastrar tarefa' })
    } else {
      res.send({ message: 'Tarefa cadastrada com sucesso' })
    }
  })
})

app.post('/tarefas', (req, res) => {
  const { titulo, descricao, status, usuarioId } = req.body;
  const query = 'INSERT INTO tarefas (titulo, descricao, status, usuario_id) VALUES (?, ?, ?, ?)';
  db.query(query, [titulo, descricao, status, usuarioId], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erro ao cadastrar tarefa' })
    } else {
      res.send({ message: 'Tarefa cadastrada com sucesso' })
    }
  })
})
})