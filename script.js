// =====================
// FORM VALIDATION & SUBMISSION
// =====================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Bootstrap form validation
            if (!form.checkValidity() === false) {
                e.stopPropagation();
            }
            
            form.classList.add('was-validated');
            
            // If all fields are valid
            if (form.checkValidity()) {
                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    city: document.getElementById('city').value,
                    company: document.getElementById('company').value,
                    message: document.getElementById('message').value
                };
                
                // Log form data (in real scenario, send to server)
                console.log('Form Data:', formData);
                
                // Show success message
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.classList.remove('d-none');
                }
                
                // Reset form
                form.reset();
                form.classList.remove('was-validated');
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    if (successMessage) {
                        successMessage.classList.add('d-none');
                    }
                }, 5000);
            }
        });
    }
});

// =====================
// SMOOTH SCROLL ANIMATIONS
// =====================
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Add scroll animations to elements
    const cards = document.querySelectorAll('.service-card, .industry-card, .service-detail-card');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// =====================
// NAVBAR ACTIVE STATE ON SCROLL
// =====================
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// =====================
// PHONE NUMBER FORMATTING
// =====================
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
}

// =====================
// EMAIL VALIDATION
// =====================
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function(e) {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
}

// =====================
// SCROLL TO TOP BUTTON
// =====================
// =====================
// SCROLL TO TOP BUTTON
// =====================
window.addEventListener('scroll', function() {
    let scrollBtn = document.getElementById('scrollToTop');

    if (window.scrollY > 300) {
        if (!scrollBtn) {

            const isMobile = window.innerWidth <= 768;

            scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTop';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

            scrollBtn.style.cssText = `
                position: fixed;
                bottom: ${isMobile ? '62px' : '75px'};
                right: ${isMobile ? '16px' : '30px'};
                background: linear-gradient(135deg, #f20b0d 0%, #c20a0b 100%);
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                font-size: 20px;
                cursor: pointer;
                z-index: 99998;
                opacity: 1;
                transition: opacity 0.3s ease;
                display: block;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                
            `;

            document.body.appendChild(scrollBtn);

            scrollBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

        } else {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.display = 'block';
            scrollBtn.style.pointerEvents = 'auto';
        }
    } else {
        if (scrollBtn) {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.pointerEvents = 'none';
        }
    }
});

// =====================
// NAVBAR COLLAPSE ON LINK CLICK
// =====================
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
});

// =====================
// ANIMATION ON PAGE LOAD
// =====================
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.hero-content, .service-card, .industry-card');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// =====================
// HOVER EFFECTS ON CARDS
// =====================
document.querySelectorAll('.service-card, .industry-card, .service-detail-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 24px rgba(242, 11, 13, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// =====================
// SMOOTH LINK NAVIGATION
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// FORM RESET ON PAGE LOAD
// =====================
window.addEventListener('load', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.reset();
        form.classList.remove('was-validated');
    }
});

// =====================
// DYNAMIC PAGE INDICATOR
// =====================
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// =====================
// INDUSTRIES PAGE SECTION HOOKS
// =====================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('section').forEach(section => {
        const headingText = section.querySelector('h1, h2, h3, h4, h5, h6')?.textContent || '';
        const sectionText = section.textContent || '';

        if (
            headingText.includes('Industry Expertise') ||
            (sectionText.includes('Regional Expertise') && sectionText.includes('Proven Success'))
        ) {
            section.classList.add('industry-expertise-section');
        }
    });
});

// =====================
// FORM FIELD CLEAR ON FOCUS
// =====================
document.querySelectorAll('.form-control, .form-select').forEach(field => {
    field.addEventListener('focus', function() {
        this.style.borderColor = '#f20b0d';
        this.style.boxShadow = '0 0 0 0.2rem rgba(242, 11, 13, 0.15)';
    });
    
    field.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
        this.style.boxShadow = '';
    });
});

// =====================
// REVEAL ANIMATION SYSTEM
// =====================
document.addEventListener('DOMContentLoaded', function() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelectors = [
        'section .container > h2',
        'section .container > .row',
        '.service-card',
        '.industry-badge',
        '.industry-card',
        '.service-detail-card',
        '.accordion-item',
        '.contact-card',
        '.professional-card',
        '.footer .col-lg-4',
        'footer .col-lg-4',
        'footer .col-lg-3',
        'footer .col-lg-5'
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(',')))
        .filter((item, index, items) => items.indexOf(item) === index);

    revealItems.forEach((item, index) => {
        item.classList.add('reveal-ready');
        item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('reveal-in'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => revealObserver.observe(item));
});
