const navbarLinks = document.querySelectorAll(".nav-link");

navbarLinks.forEach(navbarLink => {
    navbarLink.addEventListener("click", () => {
        const navbarToggle = document.querySelector(".navbar-toggler");
        if (navbarToggle.getAttribute("aria-expanded") === "true") {
            navbarToggle.click(); // Collapse the navbar
        }
    });
});

