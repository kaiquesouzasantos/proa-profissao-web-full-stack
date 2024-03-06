import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 4,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});