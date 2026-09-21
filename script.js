// Mobile Menu
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");
menuButton.classList.add("menu-button");
menuButton.innerHTML = "☰";
nav.appendChild(menuButton);

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show-menu");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-menu");
    });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

// Footer Year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Scroll To Top Button
const scrollTopButton = document.createElement("button");

scrollTopButton.innerHTML = "↑";
scrollTopButton.classList.add("scroll-top");

document.body.appendChild(scrollTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
