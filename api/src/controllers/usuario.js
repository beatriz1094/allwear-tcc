const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const create = async (req, res) => {
    try {
        const { nome, telefone, email, senha } = req.body;
        console.log(req.body);
        const senhaHash = await bcrypt.hash(senha, 10); // Criptografa a senha
        const usuario = await prisma.usuario.create({
            data: { nome, telefone, email, senha: senhaHash }
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
}

const read = async (req, res) => {
    const usuario = await prisma.usuario.findMany();
    return res.json(usuario);
}

const readOne = async (req, res) => {
    try {
        const usuario = await prisma.usuario.findUnique({
            select: {
                id: true,
                nome: true,
                telefone: true,
                email: true,
                senha: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(usuario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const usuario = await prisma.usuario.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(usuario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.usuario.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };