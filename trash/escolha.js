document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");


  sliders.forEach(slider => {
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");
    const slides = slider.querySelectorAll(".slide");

    let activeIndex = 0;

        function changeSlide(newIndex) {
      slides.forEach(slide => slide.classList.remove("active"));
      activeIndex = (newIndex + slides.length) % slides.length; // volta ao início/fim
      slides[activeIndex].classList.add("active");
    }

    prevButton.addEventListener("click", function () {
      changeSlide(activeIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      changeSlide(activeIndex + 1);

      
    });
  });
  
  
});
const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
  menuOptions.classList.toggle('show');
});

// Fechar o menu se o usuário clicar fora dele
window.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-button')) {
    if (menuOptions.classList.contains('show')) {
      menuOptions.classList.remove('show');
    }
  }
  if (event.target.matches('.menu-option')) {
    menuOptions.classList.remove('show');
  }
  
  
});

document.addEventListener("DOMContentLoaded", function () {
  const btnFinalizar = document.getElementById("finalizarBtn");
  const mensagem = document.getElementById("mensagemMissmatch");

  btnFinalizar.addEventListener("click", function () {
    mensagem.style.display = "block";

    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000); // Esconde após 3 segundos
  });

 

});


document.addEventListener("DOMContentLoaded", async function () {
  const sliders = document.querySelectorAll(".slider");

  // 🔥 Buscar imagens do backend
  const res = await fetch("http://localhost:3000/listar-imagens");
  const imagens = await res.json();

  // Preencher o primeiro slider com imagens do backend
  const slider = sliders[0]; // exemplo: só o primeiro slider
  const containerSlides = slider.querySelectorAll(".slide");

  slider.innerHTML = ""; // limpa o que já tinha

  imagens.forEach((imgUrl, index) => {
    const div = document.createElement("div");
    div.classList.add("slide");
    if (index === 0) div.classList.add("active"); // primeira imagem ativa
    div.innerHTML = `<img src="${imgUrl}" alt="slide ${index + 1}">`;
    slider.appendChild(div);
  });

  // depois você pode reaproveitar o código que você já tem pros botões prev/next
});

const form = document.getElementById("uploadForm");
const slider = document.querySelector(".slider");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  // Criar um novo slide com a imagem enviada
  const div = document.createElement("div");
  div.classList.add("slide", "active"); // já deixa como ativo
  div.innerHTML = `<img src="${data.url}" alt="imagem">`;

  // Remove 'active' do slide anterior
  const slidesAtivos = slider.querySelectorAll(".slide.active");
  slidesAtivos.forEach(s => s.classList.remove("active"));

  slider.appendChild(div);
});
