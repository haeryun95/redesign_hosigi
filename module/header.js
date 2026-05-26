$(function () {
    const $navItem = $(".pc_nav .nav_list > li"); // 메인 메뉴 아이템
    const $subMenu = $(".nav_list_subMenu"); // 서브 메뉴
    const $navBg = $(".header .nav_background"); // 메뉴 배경
    const $pc_nav = $(".header .pc_nav"); // 헤더 전체
    const $dim = $(".header .dim"); // 헤더 전체

    $navItem.on("mouseenter", function () {
        $subMenu.stop().slideDown(300);
        $navBg.stop().slideDown(300);
        $dim.stop().fadeIn(); // mouseenter 시
    });

    $pc_nav.on("mouseleave", function () {
        // 서브메뉴와 배경을 동시에 슬라이드 업
        $subMenu.stop().slideUp(200);
        $navBg.stop().slideUp(200);
        $dim.stop().fadeOut(); // mouseleave 시
    });
});

$(function () {
    const $body = $("body");
    const $mbMenuBtn = $(".mb_menu_btn");
    const $mbCloseBtn = $(".mb_close_btn");
    const $mbNav = $(".mb_nav");
    const $dim = $(".dim");
    const $mbNavItems = $(".mb_nav .nav_list > li > a");

    function openMobileMenu() {
        $mbNav.addClass("active");
        $dim.addClass("active");
        $body.addClass("scroll_lock");
    }

    function closeMobileMenu() {
        $mbNav.removeClass("active");
        $dim.removeClass("active");
        $body.removeClass("scroll_lock");
        $(".mb_nav .nav_list > li").removeClass("active");
    }

    $mbMenuBtn.on("click", function () {
        openMobileMenu();
    });

    $mbCloseBtn.on("click", function () {
        closeMobileMenu();
    });

    $dim.on("click", function () {
        closeMobileMenu();
    });

    $mbNavItems.on("click", function (e) {
        const $parentLi = $(this).parent("li");
        const $subMenu = $parentLi.children(".nav_list_subMenu");

        if ($subMenu.length) {
            e.preventDefault();

            $(".mb_nav .nav_list > li").not($parentLi).removeClass("active").children(".nav_list_subMenu").stop().slideUp(250);

            $parentLi.toggleClass("active");
            $subMenu.stop().slideToggle(250);
        }
    });

    $(window).on("resize", function () {
        if ($(window).width() > 1024) {
            closeMobileMenu();
            $(".mb_nav .nav_list_subMenu").removeAttr("style");
        }
    });
});
