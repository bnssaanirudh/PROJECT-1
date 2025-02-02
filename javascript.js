// Add smooth scroll for CTA button click
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#signup').scrollIntoView({ behavior: 'smooth' });
});
