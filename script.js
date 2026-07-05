const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggle");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
    }

});