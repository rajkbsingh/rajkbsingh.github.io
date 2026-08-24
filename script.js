// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Dark / Light mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkMode =
        document.body.classList.contains("dark-mode");

    themeToggle.textContent =
        darkMode ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );
});


// Restore saved theme
const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";
}


// Active navigation link
const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });

});


// Smooth navigation
navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
