document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
        { threshold: [1] }
    );

    observer.observe(navbar);
});

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
    if (viewportWidth > 768) { // Only add .sticky for larger viewports
        if (window.scrollY > 0) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    } else {
        navbar.classList.remove("sticky"); // Always horizontal on small viewports
    }
});