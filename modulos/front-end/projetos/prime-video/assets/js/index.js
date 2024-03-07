import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

window.addEventListener("DOMContentLoaded", () => {
    let number_images = 10;
    document.body.style.backgroundImage = `linear-gradient(to top, #000, rgba(0,0,0,0.5) 100%), url('assets/img/background/${Math.floor(Math.random() * number_images + 1)}.png')`;
})

new Swiper(".swiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: false,
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        clickable: true,
    },
});