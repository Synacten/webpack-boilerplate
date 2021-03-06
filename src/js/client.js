import Swiper from 'swiper/dist/js/swiper';


const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
