// Mobile navigation

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
}

// Close mobile menu after selecting a section

document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("open");
    });
});

// Automatically update copyright year

document.querySelector("#year").textContent = new Date().getFullYear();
