document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const telefone = document.getElementById("telefone").value;

  try {
    const response = await fetch("http://localhost:3000/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone,senha }),
    });

    if (response.ok) {
      document.getElementById("mensagem").textContent = "Cadastro realizado com sucesso!";
      window.location.href = "login.html";
    } 
  } catch (error) {
    document.getElementById("mensagem").textContent = "Erro ao conectar com o servidor.";
  }
});
