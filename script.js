// MORAX - JavaScript

// Menu Mobile Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = '';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        document.body.style.overflow = '';
    });
});

// Fechar menu ao pressionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        document.body.style.overflow = '';
    }
});

// Lazy loading para imagens
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                imageObserver.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
} else {
    // Fallback para navegadores antigos
    images.forEach(img => img.classList.add('loaded'));
}

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations usando Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animar seções ao scroll
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(section);
});

// Hero sempre visível
document.querySelector('header').style.opacity = '1';
document.querySelector('header').style.transform = 'translateY(0)';
