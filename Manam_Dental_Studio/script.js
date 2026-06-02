document.addEventListener('DOMContentLoaded', () => {

    // ===== HEADER SCROLL =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');
    
    // Create mobile menu overlay
    const mobileMenu = document.createElement('div');
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = '80px';
    mobileMenu.style.left = '0';
    mobileMenu.style.right = '0';
    mobileMenu.style.bottom = '0';
    mobileMenu.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    mobileMenu.style.zIndex = '999';
    mobileMenu.style.display = 'none';
    mobileMenu.style.flexDirection = 'column';
    mobileMenu.style.padding = '40px 24px';
    mobileMenu.style.gap = '24px';
    
    // Copy links
    const links = Array.from(nav.querySelectorAll('a')).map(a => {
        const clone = a.cloneNode(true);
        clone.style.fontSize = '1.5rem';
        clone.style.fontWeight = '600';
        clone.style.color = 'var(--text-main)';
        return clone;
    });
    
    links.forEach(link => {
        mobileMenu.appendChild(link);
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    document.body.appendChild(mobileMenu);

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (mobileMenu.style.display === 'none') {
                mobileMenu.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ===== SCROLL REVEAL & FADE IN =====
    const revealElements = document.querySelectorAll('.reveal, .fade-in');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Trigger initial animations for elements already in view
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = 100; // Account for fixed header
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FORM HANDLING =====
    const form = document.getElementById('appointmentForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form && submitBtn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Booking Confirmed!';
            submitBtn.style.backgroundColor = '#10b981'; // Green
            submitBtn.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.3)';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.boxShadow = '';
                submitBtn.disabled = false;
                form.reset();
            }, 4000);
        });
    }
});
