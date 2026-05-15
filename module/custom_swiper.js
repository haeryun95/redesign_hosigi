// hero section slide
const heroSwiper = new Swiper(".hero_slideBox .swiper", {
    speed: 400,
    spaceBetween: 100,
});

// menu swiper

const menuSwiper = new Swiper(".menu_swiper", {
    loop: true,

    pagination: {
        el: ".menu-swiper-pagination",
    },

    navigation: {
        nextEl: ".menu-swiper-button-next",
        prevEl: ".menu-swiper-button-prev",
    },
});
