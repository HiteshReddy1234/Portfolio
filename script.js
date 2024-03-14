document.getElementById('lead-down').addEventListener('click', function() {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Scroll down by the height of the viewport
    window.scrollBy({
        top: viewportHeight,
        behavior: 'smooth' // Smooth scrolling animation
    });
});


const navbarLinks = document.querySelectorAll('.navbar-menu a');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});
document.querySelectorAll('[class=nav-link]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const targetOffsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('[class=scroll]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const targetOffsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });
});
