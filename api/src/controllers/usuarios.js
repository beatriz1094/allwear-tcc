const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar um novo usuário
async function create(req, res) {
  const { nome, email, senha, telefone } = req.body;

  try {
    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        telefone,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar usuário" });
  }
}

// Ler todos os usuários
async function read(req, res) {
  try {
    const users = await prisma.usuario.findMany();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
}

// Atualizar um usuário
async function update(req, res) {
  const { id } = req.params;
  const { nome, email, senha, telefone } = req.body;

  try {
    const updatedUser = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        email,
        senha,
        telefone,
      },
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
}

// Deletar um usuário
async function deletar(req, res) {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar usuário" });
  }
}

module.exports = {
  create,
  read,
  update,
  deletar,
};
