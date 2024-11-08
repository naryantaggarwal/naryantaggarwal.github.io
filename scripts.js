document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
        { threshold: [1] }
    );

    observer.observe(navbar);
});

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
