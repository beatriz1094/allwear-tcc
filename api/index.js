const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const routes = require('./src/routes');
const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});