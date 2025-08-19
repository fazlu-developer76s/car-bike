const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle the menu when the hamburger icon is clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Optional: Close the menu when a link is clicked (useful for single-page apps)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});