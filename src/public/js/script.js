const headerLinks = document.querySelector(".header-links");
const headerBtnsClose = document.getElementById('header-btns-close');
const headerBtnsOpen = document.getElementById("header-btns-open");

function abrirHeaderMenu(){
    headerLinks.classList.toggle("header-links-open");

    headerBtnsClose.classList.toggle("show");
    headerBtnsOpen.classList.toggle("show");
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });