document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".header__nav__button");
    const mobileNav = document.querySelector(".mobile__nav");
    const mobileNavClose = document.querySelector(".mobile__nav__close");
    const container = document.querySelector(".container");

    menuButton.addEventListener("click", function (delayedOpenMenu) {
        container.classList.add("fade-out");
        
        function delayedOpenMenu () {
            mobileNav.classList.add("openMenu");
        };
        
        setTimeout(delayedOpenMenu, 200);
        
    });

    mobileNavClose.addEventListener("click", function () {
        container.classList.remove("fade-out");
        mobileNav.classList.remove("openMenu");
    });

});