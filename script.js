// Mobile Menu Functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Active Navigation Highlight
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// 3D Effect Handlers
document.addEventListener('DOMContentLoaded', () => {
    // Hero section 3D effect
    const hero = document.querySelector('.hero-content');
    const heroText = document.querySelector('.hero-text');
    
    hero.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = hero.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * 10;
        
        heroText.style.transform = `
            translateZ(20px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });
    
    hero.addEventListener('mouseleave', () => {
        heroText.style.transform = 'translateZ(20px)';
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            const rotateX = (y - 0.5) * 10;
            const rotateY = (x - 0.5) * 10;
            
            btn.style.transform = `
                translateZ(10px)
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateZ(0)';
        });
    });

    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tags span');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateZ(10px) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateZ(0)';
        });
    });
});

// Skill bars animation
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'scale(1)';
    });
});