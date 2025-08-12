AOS.init({
  duration: 1000, 
  once: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
window.onload = function () {
  const marqueeInner = document.getElementById("marquee-inner");
  const clonedContent = marqueeInner.innerHTML;
  marqueeInner.innerHTML += clonedContent;
};
