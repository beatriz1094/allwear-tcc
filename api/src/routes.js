const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/usuario.js'); 

routes.get('/', (req, res) => {
    res.json({ titulo: 'API DD respondendo' });
});

routes.post('/usuarios', usuario.create); 
routes.get('/usuarios', usuario.read); 
routes.put('/usuarios/:id', usuario.update); 
routes.delete('/usuarios/:id', usuario.deletar); 

module.exports = routes;