// 커스텀 swiper slide 관련 JS
// 작동확인 완료 2026.05.019

/* ==============================
   Hero Swiper
============================== */
const initHeroSwiper = () => {
    const heroSwiperEl = document.querySelector(".hero_slideBox .swiper");

    if (!heroSwiperEl) return;

    new Swiper(heroSwiperEl, {
        speed: 400,
        spaceBetween: 100,
    });
};

/* ==============================
   Menu Swiper
============================== */
const menuSwipers = [];

const initMenuSwipers = () => {
    const menuSwiperEls = document.querySelectorAll(".menu_swiper");

    if (!menuSwiperEls.length) return;

    menuSwiperEls.forEach((swiperEl) => {
        const swiperBox = swiperEl.closest(".menu_swiper_box");

        if (!swiperBox) return;

        const nextButton = swiperBox.querySelector(".menu-swiper-button-next");
        const prevButton = swiperBox.querySelector(".menu-swiper-button-prev");

        const swiper = new Swiper(swiperEl, {
            slidesPerView: 4,
            spaceBetween: 12,
            loop: true,
            speed: 600,

            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },

            breakpoints: {
                0: {
                    slidesPerView: 1.15,
                    spaceBetween: 14,
                },
                480: {
                    slidesPerView: 1.35,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });

        menuSwipers.push(swiper);
    });
};

/* ==============================
   Menu Tab
============================== */
const initMenuTabs = () => {
    const tabItems = document.querySelectorAll(".menu_tab_list li");
    const tabLinks = document.querySelectorAll(".menu_tab_list a");
    const tabContents = document.querySelectorAll(".menu_tab_contents");

    if (!tabLinks.length || !tabContents.length) return;

    tabLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetContent = document.querySelector(targetId);

            if (!targetContent) return;

            tabItems.forEach((item) => {
                item.classList.remove("active");
            });

            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            link.parentElement.classList.add("active");
            targetContent.classList.add("active");

            updateMenuSwipers();
        });
    });
};

const updateMenuSwipers = () => {
    menuSwipers.forEach((swiper) => {
        swiper.update();
    });
};

/* ==============================
   Story Banner Swiper
============================== */
const initStoryBannerSwipers = () => {
    const topBannerEl = document.querySelector(".topBanner");
    const bottomBannerEl = document.querySelector(".bottomBanner");

    if (topBannerEl) {
        new Swiper(topBannerEl, {
            speed: 500,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }

    if (bottomBannerEl) {
        new Swiper(bottomBannerEl, {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }
};

/* ==============================
   Init
============================== */
document.addEventListener("DOMContentLoaded", () => {
    initHeroSwiper();
    initMenuSwipers();
    initMenuTabs();
    initStoryBannerSwipers();
});
