/**
 * Pluto Browser Website — Main Script
 */

document.addEventListener("DOMContentLoaded", () => {
    // Populate current year in footer dynamically
    const currentYearEl = document.getElementById("currentYear");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Docs Sidebar Active State on Scroll (Scrollspy)
    const docsNavLinks = document.querySelectorAll(".docs-nav-links a");
    const docsArticles = document.querySelectorAll(".docs-content article[id]");

    if (docsNavLinks.length > 0 && docsArticles.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        docsNavLinks.forEach((link) => {
                            if (link.getAttribute("href") === `#${id}`) {
                                link.classList.add("active");
                            } else {
                                link.classList.remove("active");
                            }
                        });
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            }
        );

        docsArticles.forEach((article) => observer.observe(article));
    }
});
