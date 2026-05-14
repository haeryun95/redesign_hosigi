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
