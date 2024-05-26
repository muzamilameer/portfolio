document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuClose = document.getElementById("menu-close");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    menuClose.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
