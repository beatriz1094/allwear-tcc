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

