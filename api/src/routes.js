const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/usuarios'); 

// Rota inicial para verificar se a API está funcionando
routes.get('/', (req, res) => {
  res.json({ titulo: 'API DD respondendo' });
});

// Rotas para manipulação de usuários
routes.post('/usuarios', usuario.create);       // Criar um novo usuário
routes.get('/usuarios', usuario.read);          // Ler todos os usuários
routes.put('/usuarios/:id', usuario.update);    // Atualizar um usuário existente
routes.delete('/usuarios/:id', usuario.deletar); // Deletar um usuário existente

module.exports = routes;
