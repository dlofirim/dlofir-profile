// Navigasi: Show/Hide Sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        document.getElementById(sectionId).classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Fade-in on Load (untuk section aktif)
window.addEventListener('load', () => {
    document.querySelector('.active').style.opacity = 1;
    document.querySelector('.active').style.transform = 'translateY(0)';
});
