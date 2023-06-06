// typed
var typed = new Typed(".auto-type", {
  strings: ["professional", "Tezkor va qulay", "ishonchli"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});
// Imask
var element = document.getElementById('tel');
var maskOptions = {
  mask: '+{998}(00)000-00-00',
  lazy: false
};
var element2 = document.getElementById('tel2');
var maskOptions = {
  mask: '+{998}(00)000-00-00',
  lazy: false

};
var mask = new IMask(element, maskOptions);
var mask = new IMask(element2, maskOptions);
//hamb navigation biz-bilan aloqa btn
let hamb = document.querySelector('.nav-hamb');
let mobileNav = document.querySelector('.mobileNav');
let cancel = document.querySelector('.cancel');
let bizBilanAloqa = document.querySelector('#BizBilan');
let bizBilanAloqa2 = document.querySelector('#BizBilan2');
let aloqaBody = document.querySelector('.Biz-bilan-aloqa');
let cancelAloqa = document.querySelector('.cancelAloqa');
let header = document.querySelector('.header');

hamb.addEventListener('click', () => {
  mobileNav.style.transform = 'translateY(0px)';
  hamb.style.display = 'none';
})
cancel.addEventListener('click', () => {
  mobileNav.style.transform = 'translateY(-1000px)';
  hamb.style.display = 'flex';
})
bizBilanAloqa.addEventListener('click', () => {
  aloqaBody.style.transform = 'translateY(0px)';
})
bizBilanAloqa2.addEventListener('click', () => {
  aloqaBody.style.transform = 'translateY(0px)';
  mobileNav.style.transform = 'translateY(-1000px)';
  hamb.style.display = 'flex';
})
cancelAloqa.addEventListener('click', () => {
  aloqaBody.style.transform = 'translateY(-1000px)';
})


//swiper
var swiper = new Swiper('.swiper.hizmatlarimiz', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflow: {
    rotate: 150,
    stretch: 50,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    270: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

//fotogallareya
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
