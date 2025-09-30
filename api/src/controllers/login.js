const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Busca o Usuario pelo email
        const Usuario = await prisma.Usuario.findFirst({
            where: { email  },
            select: {
                id: true,
                email: true,
                senha: true,
            }
        });

        //Se o usuário não for encontrado vai retornar isso.
        if (!Usuario) {
            return res.status(401).json({ message: 'Usuário não encontrado!' });
        }

        // Valida a senha usando bcrypt
        const senhaValida = await bcrypt.compare(senha, Usuario.senha);
        
        console.log(senha, Usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha incorretos!' });
        }

        // Gera o token JWT
        const token = jsonwebtoken.sign(
            { id: Usuario.id, email: Usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token });
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const validaToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." });
    }

    jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido ou expirado." });
        }
        req.user = decoded;
        res.status(200).json({ message: req.user });
    });
};

module.exports = {
    login,
    validaToken
};