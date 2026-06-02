document.addEventListener('DOMContentLoaded', () => {

    // ===== LOADER =====
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('done'), 1800);
    });
    // Fallback in case load already fired
    setTimeout(() => loader.classList.add('done'), 2200);

    // ===== CUSTOM CURSOR =====
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (dot && outline && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0, outX = 0, outY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        function animateOutline() {
            outX += (mouseX - outX) * 0.15;
            outY += (mouseY - outY) * 0.15;
            outline.style.left = outX + 'px';
            outline.style.top = outY + 'px';
            requestAnimationFrame(animateOutline);
        }
        animateOutline();

        // Grow cursor on interactive elements
        document.querySelectorAll('a, button, .service-card, .about-card, .review-card, .gallery-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.style.width = '10px';
                dot.style.height = '10px';
                outline.style.width = '52px';
                outline.style.height = '52px';
                outline.style.borderColor = 'rgba(194,155,98,0.4)';
            });
            el.addEventListener('mouseleave', () => {
                dot.style.width = '6px';
                dot.style.height = '6px';
                outline.style.width = '36px';
                outline.style.height = '36px';
                outline.style.borderColor = '';
            });
        });
    }

    // ===== NAVBAR SCROLL =====
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    // ===== MOBILE MENU =====
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = nav.offsetHeight + 8;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ===== FORM SUBMISSION =====
    const form = document.getElementById('appointmentForm');
    const submitBtn = document.getElementById('submitBtn');
    if (form && submitBtn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const origText = submitBtn.textContent;
            submitBtn.textContent = '✓ Request Sent Successfully!';
            submitBtn.style.background = '#22C55E';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = origText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                form.reset();
            }, 3500);
        });
    }
});
