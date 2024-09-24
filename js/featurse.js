

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('backdrop-blur-md', 'bg-opacity-60');
    } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-opacity-60');
    }
});