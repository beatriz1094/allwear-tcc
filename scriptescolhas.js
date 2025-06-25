const slider = document.getElementById("slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slides = [];
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function createSlideElement(src) {
  const slide = document.createElement("div");
  slide.className = "slide";
  const img = document.createElement("img");
  img.src = src;
  slide.appendChild(img);
  return slide;
}

document.addEventListener("DOMContentLoaded", () => {
  // Imagens de exemplo para demonstração
  const imageSources = [
    "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Imagem+1",
    "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Imagem+2",
    "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Imagem+3",
  ];

  imageSources.forEach((src ) => {
    const slide = createSlideElement(src);
    slider.insertBefore(slide, prevBtn); // antes do botão
    slides.push(slide);
  });

  showSlide(0);
});

prevBtn.addEventListener("click", () => {
  if (slides.length === 0) return;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
  prevBtn.classList.add("flash-pink");
  setTimeout(() => {
    prevBtn.classList.remove("flash-pink");
  }, 300);
});

nextBtn.addEventListener("click", () => {
  if (slides.length === 0) return;
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  nextBtn.classList.add("flash-pink");
  setTimeout(() => {
    nextBtn.classList.remove("flash-pink");
  }, 300);
});
document.querySelectorAll('.prev, .next').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('flash-brown');
    setTimeout(() => button.classList.remove('flash-brown'), 300);
  });
});
