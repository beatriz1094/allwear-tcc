const express = require('express');
const routes = express.Router();

const Cadastro = require('./controllers/cadastro');
const Login = require('./controllers/login');
const Escolha = require('./controllers/escolha');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'all wear' });
});

routes.post('/cadastro', Cadastro.create);
routes.get('/cadastro', Cadastro.read);
routes.get('/cadastro/:id', Cadastro.readOne);
routes.patch('/cadastro/:id', Cadastro.update);
routes.delete('/cadastro/:id', Cadastro.remove);

routes.post('/login', Login.create);
routes.get('/login', Login.read);
routes.get('/login/:id', Login.readOne);
routes.patch('/login/:id', Login.update);
routes.delete('/login/:id', Login.remove);

routes.post('/escolha', Escolha.create);
routes.get('/escolha', Escolha.read);
routes.get('/escolha/:id', Escolha.readOne);
routes.patch('/escolha/:id', Escolha.update);
routes.delete('/escolha/:id', Escolha.remove);

module.exports = routes;