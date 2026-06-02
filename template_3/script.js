document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            
            if (nav.style.display === 'block') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.padding = '24px';
                nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                if (window.innerWidth <= 768 && nav.style.display === 'block') {
                    nav.style.display = 'none';
                }
            }
        });
    });
});
