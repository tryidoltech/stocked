
let currentSlide = 0;

/**
 * Show a specific slide
 * @param {number} index - The index of the slide to show
 */
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Wrap around slides
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move slides container to show the current slide
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}vw)`;

    // Handle text content animation
    slides.forEach((slide, i) => {
        const textContent = slide.querySelector('.text-content');
        if (i === currentSlide) {
            textContent.style.opacity = 1;
            textContent.style.display = 'block';
            textContent.querySelector('h1').style.animationName = 'fadeInDown';
            textContent.querySelector('p').style.animationName = 'fadeInUp';
        } else {
            textContent.style.opacity = 0;
            textContent.style.display = 'none';
            textContent.querySelector('h1').style.animationName = '';
            textContent.querySelector('p').style.animationName = '';
        }
    });
}

/**
 * Show the next slide
 */
function nextSlide() {
    showSlide(currentSlide + 1);
}

/**
 * Show the previous slide
 */
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial display
showSlide(currentSlide);

// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menu for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');
navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});
