// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Publication filters
const filterButtons = document.querySelectorAll(".filter-btn");
const publications = document.querySelectorAll(".publication-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        publications.forEach(item => {
            item.style.display =
                filter === "all" || item.dataset.type === filter
                    ? "grid"
                    : "none";
        });
    });
});

// Active navigation state
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => item.classList.remove("active"));

                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (active) active.classList.add("active");
            }
        });
    },
    {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0
    }
);

sections.forEach(section => observer.observe(section));
