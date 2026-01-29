// Navigasi: Show/Hide Sections (untuk nav atas dan tombol bawah)
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event untuk nav atas
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Event untuk tombol next/prev di bawah
document.querySelectorAll('.next-btn, .prev-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const nextSection = this.getAttribute('data-next') || this.getAttribute('data-prev');
        showSection(nextSection);
    });
});

// Fade-in on Load (untuk section aktif)
window.addEventListener('load', () => {
    document.querySelector('.active').style.opacity = 1;
    document.querySelector('.active').style.transform = 'translateY(0)';
});
