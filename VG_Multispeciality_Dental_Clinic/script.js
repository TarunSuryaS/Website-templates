document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scrolling & Active Link State
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .fade-in');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    
    // Trigger animations for elements already in viewport on load
    setTimeout(() => {
        const topElements = document.querySelectorAll('.hero .fade-in');
        topElements.forEach(el => el.classList.add('active'));
    }, 100);

    // Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Request Sent Successfully ✓';
            btn.style.backgroundColor = '#10B981'; // Success Green
            btn.style.borderColor = '#10B981';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                bookingForm.reset();
            }, 4000);
        });
    }
});
