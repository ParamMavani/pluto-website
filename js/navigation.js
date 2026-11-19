/**
 * Pluto Browser Website — Navigation Script
 */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    // Toggle menu
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.classList.toggle("active", isOpen);
    });

    // Close menu on navigation link click
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("active");
        }
    });

    // Close menu on Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("active");
        }
    });
});
