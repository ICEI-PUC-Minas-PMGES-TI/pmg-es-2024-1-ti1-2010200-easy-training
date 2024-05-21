document.addEventListener("DOMContentLoaded", function() {
    // Carregar logotipo
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.src = 'logoimg/Logo.png';
    }
  
    // Carregar imagens do carrossel
    const carouselImages = [
      'carrosselimg/carrossel1.png',
      'carrosselimg/carrossel2.png',
      'carrosselimg/carrossel3.png'
    ];
  
    document.querySelectorAll('.carousel-item img').forEach((img, index) => {
      if (carouselImages[index]) {
        img.src = carouselImages[index];
      }
    });
  
    // Carregar imagem do card principal
    const mainCardImg = document.querySelector('.card-padrão .card-img');
    if (mainCardImg) {
      mainCardImg.src = 'cardimg/foto_card.png';
    }
  
    // Carregar imagens dos cards recomendados
    const recommendedCardImages = [
      'cardimg/card1.png',
      'cardimg/card2.png',
      'cardimg/card3.png'
    ];
  
    document.querySelectorAll('.fichas .card img').forEach((img, index) => {
      if (recommendedCardImages[index]) {
        img.src = recommendedCardImages[index];
      }
    });
  });
  