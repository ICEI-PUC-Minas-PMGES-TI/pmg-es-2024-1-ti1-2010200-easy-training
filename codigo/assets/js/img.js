document.addEventListener("DOMContentLoaded", function() {
    // Carregar logotipo
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.src = '../codigo/assets/images/logoimg/Logo.png';
    }
  
    // Carregar imagens do carrossel
    const carouselImages = [
      '../codigo/assets/images/carrosselimg/carrossel1.png',
      '../codigo/assets/images/carrosselimg/carrossel2.png',
      '../codigo/assets/images/carrosselimg/carrossel3.png'
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
      '../codigo/assets/images/cardimg/card1.png',
      '../codigo/assets/images/cardimg/card2.png',
      '../codigo/assets/images/cardimg/card3.png'
    ];
  
    document.querySelectorAll('.fichas .card img').forEach((img, index) => {
      if (recommendedCardImages[index]) {
        img.src = recommendedCardImages[index];
      }
    });
  });
  