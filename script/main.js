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