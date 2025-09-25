// carousel
const carousel = document.getElementById('carousel-viewport');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (carousel) {
        nextBtn.addEventListener('click', () => {
            const slideWidth = carousel.querySelector('.carousel-slide').clientWidth;
            carousel.scrollLeft += slideWidth * 2;
        });

        prevBtn.addEventListener('click', () => {
            const slideWidth = carousel.querySelector('.carousel-slide').clientWidth;
            carousel.scrollLeft -= slideWidth * 2;
        });
    }

// coloring nabar
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    
    function updateNavbar() {
        const scrollPosition = window.scrollY + 100;
        
        if (scrollPosition < aboutSection.offsetTop) {
            nav.style.backgroundColor = 'var(--vivid-lilac)';
        } else if (scrollPosition < projectsSection.offsetTop) {
            nav.style.backgroundColor = 'var(--light-blue)';
        } else {
            nav.style.backgroundColor = 'var(--saddle)';
        }
    }
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    updateNavbar();
});