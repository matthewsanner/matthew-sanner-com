window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    let bodyHeight = document.body.offsetHeight;

    let windowHeight = window.innerHeight;

    let percentScrolled = (scrollPos / (bodyHeight - windowHeight)) * 100;
    if (percentScrolled > 100) {
        percentScrolled = 100;
    }
    percentScrolled += '%'

    document.querySelector(".animated-background").style.backgroundPosition = percentScrolled;
});