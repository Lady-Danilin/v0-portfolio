// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effects
    const rate = scrolled * -0.5;
    
    // Subtle hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate * 0.1}px)`;
    }
    
    // Subtle floating elements parallax (excluding profile photo for stable hover)
    const floatingElements = document.querySelectorAll('.about-photo');
    floatingElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.02);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Modern scroll animations with Intersection Observer
const animationObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Animate elements on scroll with different effects
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add different animation classes based on element type
            if (element.classList.contains('timeline-item')) {
                element.style.animation = 'slideInLeft 0.8s ease-out forwards';
            } else if (element.classList.contains('project-card')) {
                element.style.animation = 'scaleIn 0.6s ease-out forwards';
            } else if (element.classList.contains('stat')) {
                element.style.animation = 'slideInRight 0.8s ease-out forwards';
                // Animate the number counting
                animateCounter(element.querySelector('.stat-number'));
            } else if (element.classList.contains('skill-item')) {
                element.style.animation = 'slideInLeft 0.6s ease-out forwards';
            }
            
            // Remove observer after animation
            animateOnScroll.unobserve(element);
        }
    });
}, animationObserverOptions);

// Counter animation for statistics
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current) + '+';
        } else if (element.textContent.includes('%')) {
            element.textContent = Math.floor(current) + '%';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states for animated elements
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .stat, .skill-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
    
    // Observe elements for animation
    animatedElements.forEach(element => {
        animateOnScroll.observe(element);
    });
});

// Stagger animation for timeline items
const staggerTimeline = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
};

// Enhanced mouse tracking for interactive elements
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Very subtle parallax for hero text only (excluding hero-image for stable hover)
    const heroElements = document.querySelectorAll('.hero-text');
    heroElements.forEach((element, index) => {
        const speed = (index + 1) * 1; // Reduced from 2 to 1
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Subtle 3D effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20; // Reduced from 10 to 20
            const rotateY = (centerX - x) / 20; // Reduced from 10 to 20
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
        }
    });
});

// Reset project card transforms when mouse leaves
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Enhanced text animation for hero subtitle
const enhanceTypingAnimation = () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        // Add text reveal effect to each character
        const text = subtitle.textContent;
        subtitle.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            span.classList.add('char-reveal');
            subtitle.appendChild(span);
        });
    }
};

// Add CSS for character reveal animation
const charRevealStyle = document.createElement('style');
charRevealStyle.textContent = `
    .char-reveal {
        display: inline-block;
        opacity: 0;
        animation: textReveal 0.6s ease forwards;
    }
    
    .hero-subtitle.typing .char-reveal {
        animation: none;
        opacity: 1;
    }
`;
document.head.appendChild(charRevealStyle);

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    staggerTimeline();
    
    // Add loading animation to page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
});

// Smooth reveal animation for sections
const revealSections = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 1s ease-out forwards';
            revealSections.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Apply to section headers
document.querySelectorAll('.section-header').forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    revealSections.observe(header);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Enhanced form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[type="text"]:nth-of-type(3)').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Create email content
        const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
        const emailBody = encodeURIComponent(
            `Hello Daniela,\n\n` +
            `My name is ${name} and I'm reaching out regarding: ${subject}\n\n` +
            `Message:\n${message}\n\n` +
            `Best regards,\n${name}\n\n` +
            `Contact Email: ${email}`
        );
        
        // Open email client
        const mailtoLink = `mailto:danil.arguello@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
        // Show loading state
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Opening Email...';
        submitBtn.style.opacity = '0.7';
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form and button after a delay
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #0066CC 0%, #FF6600 100%);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                font-weight: 500;
                z-index: 9999;
                box-shadow: 0 10px 25px rgba(0, 102, 204, 0.3);
                animation: slideInRight 0.5s ease;
            `;
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Email client opened! Thank you for reaching out.';
            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 4000);
        }, 1000);
    });
}

// Add active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavigation = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #0066CC !important;
    }
    
    .nav-link.active::after {
        width: 0 !important;
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const words = [
        'Digital Communication Strategist',
        'Social Media Expert',
        'Content Creator',
        'Digital Marketing Specialist',
        'Communication Professional'
    ];

    heroSubtitle.style.width = '100%'; // Ensures it takes full available width
    heroSubtitle.style.textAlign = 'left'; // Aligns text to the left
    heroSubtitle.style.transition = 'opacity 0.3s ease-in-out'; // For fading

    let wordIndex = 0;

    function changeSubtitle() {
        heroSubtitle.style.opacity = '0'; // Start fade out

        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            heroSubtitle.textContent = words[wordIndex];
            heroSubtitle.style.opacity = '1'; // Start fade in
        }, 300); // Wait for fade out to complete (must match transition duration)

        setTimeout(changeSubtitle, 3000); // Time until next change (e.g., 3 seconds including fade time)
    }

    // Initialize with the first word and start the cycle
    heroSubtitle.textContent = words[wordIndex];
    heroSubtitle.style.opacity = '1';
    setTimeout(changeSubtitle, 3000); // Start the loop after initial display
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg effect
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        
        // Show a fun message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #0066CC 0%, #FF6600 100%);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: 600;
            z-index: 9999;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        `;
        message.textContent = '🎉 You found the secret! 🎉';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
        
        konamiCode = [];
    }
});

// Initialize Tiny Sliders for Skills Section
document.addEventListener('DOMContentLoaded', function () {
    const sliders = [
        { selector: '.analytics-marketing-slider', options: {} },
        { selector: '.design-ux-ui-slider', options: {} },
        { selector: '.project-management-slider', options: {} },
        { selector: '.ai-automation-slider', options: {} }
    ];

    sliders.forEach(sliderConfig => {
        const element = document.querySelector(sliderConfig.selector);
        if (element) {
            tns({
                container: element,
                items: 2, // Show 2 items by default
                slideBy: 'page',
                autoplay: true,
                autoplayButtonOutput: false,
                controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                nav: false, // Hide dots navigation
                mouseDrag: true,
                gutter: 16, // Space between items
                responsive: {
                    600: { // Screen width 600px and up
                        items: 3
                    },
                    900: { // Screen width 900px and up
                        items: 4
                    }
                },
                ...sliderConfig.options // Spread any specific options
            });
        }
    });
});

// Click-activated Dropdown Menu
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent link navigation
        dropdownMenu.classList.toggle('open');
        // Toggle arrow direction
        const arrow = dropdownToggle.querySelector('.dropdown-arrow');
        if (arrow) {
            arrow.style.transform = dropdownMenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });

    // Add click listener to dropdown items to close the menu
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            if (dropdownMenu.classList.contains('open')) {
                dropdownMenu.classList.remove('open');
                const arrow = dropdownToggle.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
            // The existing smooth scroll for a[href^="#"] will handle navigation
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            if (dropdownMenu.classList.contains('open')) {
                dropdownMenu.classList.remove('open');
                const arrow = dropdownToggle.querySelector('.dropdown-arrow');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
        }
    });
}

// Scroll indicator click to scroll to About section
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
} 