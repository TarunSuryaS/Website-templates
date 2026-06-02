document.addEventListener('DOMContentLoaded', () => {

    // ===== SCROLL REVEAL =====
    const animEls = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    animEls.forEach(el => obs.observe(el));

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 24,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== FORM =====
    const form = document.getElementById('slotForm');
    const btn = document.getElementById('sBtn');
    if (form && btn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const orig = btn.innerHTML;
            btn.innerHTML = '✓ Slot Requested';
            btn.style.background = '#d97757'; // accent
            btn.style.color = '#fff';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = orig;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                form.reset();
            }, 3500);
        });
    }
});
