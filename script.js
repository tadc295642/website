// Add interactivity for mobile menu toggle
document.querySelector(".menu-icon").addEventListener("click", function() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
});
