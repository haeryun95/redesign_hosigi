// hero section slide
const heroSwiper = new Swiper(".hero_slideBox .swiper", {
    speed: 400,
    spaceBetween: 100,
});

// menu swiper

// const menuSwiper = new Swiper(".menu_swiper", {
//     loop: true,

//     pagination: {
//         el: ".menu-swiper-pagination",
//     },

//     navigation: {
//         nextEl: ".menu-swiper-button-next",
//         prevEl: ".menu-swiper-button-prev",
//     },
// });

const menuSwipers = [];

document.querySelectorAll(".menu_swiper").forEach((swiperEl, index) => {
    const swiperBox = swiperEl.closest(".menu_swiper_box");

    const swiper = new Swiper(swiperEl, {
        slidesPerView: 4,
        spaceBetween: 12,
        loop: true,
        speed: 600,

        navigation: {
            nextEl: swiperBox.querySelector(".menu-swiper-button-next"),
            prevEl: swiperBox.querySelector(".menu-swiper-button-prev"),
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 12,
            },
        },
    });

    menuSwipers.push(swiper);
});

const tabItems = document.querySelectorAll(".menu_tab_list li");
const tabLinks = document.querySelectorAll(".menu_tab_list a");
const tabContents = document.querySelectorAll(".menu_tab_contents");

tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetContent = document.querySelector(targetId);

        if (!targetContent) return;

        tabItems.forEach((item) => item.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        this.parentElement.classList.add("active");
        targetContent.classList.add("active");

        // display:none 상태였다가 보이면 swiper가 너비 계산을 다시 해야 함
        menuSwipers.forEach((swiper) => {
            swiper.update();
        });
    });
});

// storySection _ banner slide
//top Banner
const topBannerSwiper = new Swiper(".topBanner", {
    speed: 500,
    autoplay: true,
    loop: true,
});

//  bottom Banner
const bottomBannerSwiper = new Swiper(".bottomBanner", {
    speed: 400,
    autoplay: true,
    loop: true,
});
