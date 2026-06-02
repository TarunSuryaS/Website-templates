document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR =====
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.style.borderBottomColor = window.scrollY > 40
            ? 'rgba(255,255,255,0.08)' : 'transparent';
    });

    // ===== MOBILE MENU =====
    const burger = document.getElementById('burger');
    const nLinks = document.getElementById('nLinks');
    if (burger && nLinks) {
        burger.addEventListener('click', () => nLinks.classList.toggle('open'));
        nLinks.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => nLinks.classList.remove('open'))
        );
    }

    // ===== SCROLL REVEAL =====
    const animEls = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    animEls.forEach(el => obs.observe(el));

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = nav.offsetHeight + 10;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FORM =====
    const form = document.getElementById('bookForm');
    const btn = document.getElementById('subBtn');
    if (form && btn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const orig = btn.textContent;
            btn.textContent = '✓ Request Sent Successfully!';
            btn.style.background = '#22C55E';
            btn.style.color = '#fff';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = orig;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                form.reset();
            }, 3500);
        });
    }
});
