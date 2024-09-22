var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });