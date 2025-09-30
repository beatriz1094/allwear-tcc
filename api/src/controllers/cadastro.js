const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
//const bcrypt = require('bcrypt');

const create = async (req, res) => {
    try {
        const { nome, telefone, email, senha } = req.body;
        //const senhaHash = await bcrypt.hash(senha, 10); // Criptografa a senha
        const usuario = await prisma.usuario.create({
            data: { nome, telefone, email, senha }
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { create };