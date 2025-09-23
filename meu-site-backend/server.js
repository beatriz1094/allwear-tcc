const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pasta onde as imagens ficarão salvas
const UPLOADS_FOLDER = path.join(__dirname, "uploads");

// Garante que a pasta existe
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_FOLDER),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Rota de cadastro
app.post("./cadastro", (req, res) => {
  const { nome, telefone, email, senha } = req.body;

  if (!nome || !telefone || !email || !senha) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  console.log("📥 Novo cadastro:", { nome, telefone, email, senha });
  res.json({ message: "Cadastro realizado com sucesso!" });
});

// Upload de 1 imagem
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ 
    url: `http://localhost:3000/uploads/${req.file.filename}` 
  });
});

// Listar todas as imagens
app.get("/listar-imagens", (req, res) => {
  fs.readdir(UPLOADS_FOLDER, (err, files) => {
    if (err) return res.status(500).json({ error: "Erro ao listar imagens" });

    const urls = files.map(file => `http://localhost:3000/uploads/${file}`);
    res.json(urls);
  });
});

// Servir as imagens
app.use("/uploads", express.static(UPLOADS_FOLDER));

// Subir servidor
app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
