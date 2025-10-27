document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('active');
    });
  });

  const images = [
    'https://images.pexels.com/photos/15290946/pexels-photo-15290946.jpeg',
    'https://images.pexels.com/photos/1484657/pexels-photo-1484657.jpeg',
    'https://cdn.pixabay.com/photo/2025/02/02/17/21/floral-arrangement-9377225_1280.jpg'
  ];

  const slideshowContainer = document.querySelector('.slideshow');
  let currentSlide = 0;

  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = `slide ${index === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `url('${image}')`;
    slideshowContainer.appendChild(slide);
  });

  const slides = document.querySelectorAll('.slide');

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  setInterval(nextSlide, 4000);
});