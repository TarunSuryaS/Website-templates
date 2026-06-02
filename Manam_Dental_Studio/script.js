document.addEventListener('DOMContentLoaded', () => {

    // ===== MOBILE MENU =====
    const burger = document.getElementById('burger');
    const navMid = document.getElementById('navMid');
    if (burger && navMid) {
        burger.addEventListener('click', () => navMid.classList.toggle('open'));
        navMid.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => navMid.classList.remove('open'))
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
    const nav = document.getElementById('nav');
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FORM =====
    const form = document.getElementById('conForm');
    const btn = document.getElementById('subBtn');
    if (form && btn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const orig = btn.innerHTML;
            btn.innerHTML = '<span class="cta-text">✓ REQUEST_SENT</span>';
            btn.style.background = 'rgba(0,255,136,0.15)';
            btn.style.color = '#00FF88';
            btn.style.borderColor = 'rgba(0,255,136,0.3)';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = orig;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
                btn.disabled = false;
                form.reset();
            }, 3500);
        });
    }
});
