const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const escolha = await prisma.escolha.create({
            data: req.body
        });
        return res.status(201).json(escolha);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const escolha = await prisma.escolha.findMany();
    return res.json(escolha);
}

const readOne = async (req, res) => {
    try {
        const escolha = await prisma.escolha.findUnique({
            select: {
                id: true,
                blusa: true,
                calca: true,
                vestido: true,
                casaco: true,
                camiseta: true,
                short: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(escolha);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const escolha = await prisma.escolha.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(escolha);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.escolha.delete({
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