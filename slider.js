let indiceSlide = 0;

function moverSlide(direccion) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Actualiza el índice del slide
  indiceSlide = (indiceSlide + direccion + totalSlides) % totalSlides;

  // Mueve el slider al slide correspondiente
  slider.style.transform = `translateX(-${indiceSlide * 100}%)`;
}