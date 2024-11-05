document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".header__nav__button");
    const mobileNav = document.querySelector(".mobile__nav");
    const mobileNavClose = document.querySelector(".mobile__nav__close");

    menuButton.addEventListener("click", function () {
        mobileNav.classList.add("openMenu");
    });

    mobileNavClose.addEventListener("click", function () {
        mobileNav.classList.remove("openMenu");
    });

});