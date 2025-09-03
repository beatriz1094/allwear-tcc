const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const cadastro = await prisma.cadastro.create({
            data: req.body
        });
        return res.status(201).json(cadastro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const cadastro = await prisma.cadastro.findMany();
    return res.json(cadastro);
}

const readOne = async (req, res) => {
    try {
        const cadastro = await prisma.cadastro.findUnique({
            select: {
                id: true,
                nome: true,
                cpf: true,
                email: true,
                viagens: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(cadastro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const cadastro = await prisma.cadastro.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(cadastro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.cadastro.delete({
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