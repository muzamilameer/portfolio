document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuClose = document.getElementById("menu-close");

    // Toggle the menu open and close
    menuToggle.addEventListener("click", function (event) {
        menu.classList.toggle("active");
        event.stopPropagation(); // Prevent click from bubbling up to the document
    });

    // Close the menu when clicking the close button
    menuClose.addEventListener("click", function (event) {
        menu.classList.remove("active");
        event.stopPropagation(); // Prevent click from bubbling up to the document
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (menu.classList.contains("active") && !menu.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    // Prevent clicks inside the menu from closing it
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
