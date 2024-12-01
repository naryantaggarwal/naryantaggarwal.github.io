document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('sticky', e.intersectionRatio < 1),
        { threshold: [1] }
    );

    observer.observe(navbar);
});
