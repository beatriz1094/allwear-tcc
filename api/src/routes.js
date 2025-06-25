const express = require('express');
const rota = express.Router();

const usuario = require('./controllers/usuario'); 

//Rotas de paciente
rota.post('/cadastro', usuario.create); // Rota para ler todos os usuarios


module.exports = rota;