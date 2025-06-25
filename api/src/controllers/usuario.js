const prisma = require('../connect');

const create = async (req, res) => {
    const { nome, email, senha, telefone } = req.body;
    console.log('Dados recebidos:', req.body);

    try {
        const usuario = await prisma.usuario.create({
            data: { nome, email, senha, telefone },
        });
        console.log('Usuário criado:', usuario);
        res.status(201).json(usuario);
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(400).json(err);
    }
};

module.exports = {create};