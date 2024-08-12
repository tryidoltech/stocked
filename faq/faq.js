// Toggle menu for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    navToggle.classList.toggle('active');
});
// faq


document.querySelectorAll('.faq-item-header').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
        const icon = item.querySelector('span');
        if (faqItem.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});
