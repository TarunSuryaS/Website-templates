document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                const navList = document.querySelector('.nav-list');
                navList.style.flexDirection = 'column';
                navList.style.width = '100%';
            }
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
                
                if (window.innerWidth <= 768 && nav.style.display === 'flex') {
                    nav.style.display = 'none';
                }
            }
        });
    });

    // Prevent form submission for demo
    const form = document.querySelector('.quick-book');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Searching for clinics near you...');
        });
    }
});
