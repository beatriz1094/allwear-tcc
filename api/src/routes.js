const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Login = require('./controllers/login');
const Escolha = require('./controllers/escolha');

const { validate } = require('./middlewares/auth');

// Rotas públicas
routes.get('/', (req, res) => {
  return res.json({ titulo: 'all wear' });
});

// Remova estas rotas duplicadas se não existirem nos controllers
routes.post('/login', Login.login);
routes.get('/login', Login.validaToken);

routes.post('/usuario', Usuario.create);
routes.get('/usuario', Usuario.read);
routes.get('/usuario/:id', validate, Usuario.readOne);
routes.patch('/usuario/:id', validate, Usuario.update);
routes.delete('/usuario/:id', validate, Usuario.remove);


// Rotas protegidas (exemplo: Escolha)
routes.post('/escolha', Escolha.create);
routes.get('/escolha', Escolha.read);
routes.get('/escolha/:id', Escolha.readOne);
routes.patch('/escolha/:id', Escolha.update);
routes.delete('/escolha/:id', Escolha.remove);

module.exports = routes;