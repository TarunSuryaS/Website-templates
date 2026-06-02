document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline has slight delay via CSS transitions usually, 
        // but let's animate it with JS for smoothness if preferred, 
        // or just use direct assignment (CSS transition handles the lag)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Loader Remove
    const loader = document.querySelector('.loader');
    const revealTexts = document.querySelectorAll('.reveal-text');
    const revealImage = document.querySelector('.reveal-image');

    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Trigger initial hero animations after loader hides
        setTimeout(() => {
            revealTexts.forEach(el => el.classList.add('active'));
            if(revealImage) revealImage.classList.add('active');
        }, 800);
    }, 1500);

    // Scroll Animations
    const scrollRevealImages = document.querySelectorAll('.reveal-image-scroll');
    const parallaxImgs = document.querySelectorAll('.parallax-img');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    scrollRevealImages.forEach(img => observer.observe(img));

    // Simple Parallax Effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxImgs.forEach(img => {
            const speed = 0.1;
            const yPos = -(scrolled * speed);
            img.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            accordionItems.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Open if wasn't active
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
    
    // Open first accordion by default
    if(accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
        const firstContent = accordionItems[0].querySelector('.accordion-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    }
});
