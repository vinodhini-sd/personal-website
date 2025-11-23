// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate timeline items on scroll with stagger
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Animate skill cards with stagger
const skillCategories = document.querySelectorAll('.skill-category');

const skillObserver = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            delay += 100;
        }
    });
}, observerOptions);

skillCategories.forEach(category => {
    skillObserver.observe(category);
});

// Animate contact cards
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
});

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

contactCards.forEach(card => {
    contactObserver.observe(card);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Code block typing animation - lines appear one by one
const codeContents = document.querySelectorAll('.code-content');
codeContents.forEach(codeContent => {
    const codeLines = codeContent.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            line.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 80 + 800);
    });
});

// Smooth cursor glow effect (optional - adds visual polish)
document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// Preload animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
    
    if (heroImage) {
        heroImage.style.animation = 'fadeIn 1s ease';
    }
});

// Animate writing cards (same as speaking cards)
const writingCards = document.querySelectorAll('.writing-card');
writingCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
});

const writingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

writingCards.forEach(card => {
    writingObserver.observe(card);
});

// Add smooth reveal for education card
const educationCard = document.querySelector('.education-card');
if (educationCard) {
    educationCard.style.opacity = '0';
    educationCard.style.transform = 'scale(0.95)';
    educationCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    const eduObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);
    
    eduObserver.observe(educationCard);
}

// Animated text cycler with typing effect and moving cursor
document.addEventListener('DOMContentLoaded', function() {
    const animatedTextElement = document.querySelector('.animated-text');
    if (animatedTextElement) {
        const words = JSON.parse(animatedTextElement.getAttribute('data-words'));
        let currentWordIndex = 0;
        
        function updateCursor(text) {
            animatedTextElement.innerHTML = text + '<span class="typing-cursor"></span>';
        }
        
        function typeWord(word) {
            return new Promise((resolve) => {
                let charIndex = 0;
                let currentText = '';
                
                const typeInterval = setInterval(() => {
                    if (charIndex < word.length) {
                        currentText += word[charIndex];
                        updateCursor(currentText);
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        resolve();
                    }
                }, 100); // Type each character every 100ms
            });
        }
        
        function eraseWord() {
            return new Promise((resolve) => {
                let currentText = animatedTextElement.textContent.replace('█', '').trim();
                
                const eraseInterval = setInterval(() => {
                    if (currentText.length > 0) {
                        currentText = currentText.substring(0, currentText.length - 1);
                        updateCursor(currentText);
                    } else {
                        clearInterval(eraseInterval);
                        resolve();
                    }
                }, 50); // Erase faster than typing
            });
        }
        
        async function cycleWords() {
            // Type the current word
            await typeWord(words[currentWordIndex]);
            
            // Pause to read
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Erase the word
            await eraseWord();
            
            // Move to next word
            currentWordIndex = (currentWordIndex + 1) % words.length;
            
            // Small pause before typing next word
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Continue cycling
            cycleWords();
        }
        
        // Start with empty and cursor
        updateCursor('');
        
        // Start typing animation
        cycleWords();
    }
});

// Copy bio text to clipboard
function copyBioText() {
    const bioContent = document.getElementById('bio-text-content');
    const paragraphs = bioContent.querySelectorAll('p');
    const bioText = Array.from(paragraphs).map(p => p.textContent).join('\n\n');
    
    navigator.clipboard.writeText(bioText).then(() => {
        const button = document.querySelector('.bio-copy-btn');
        const originalHTML = button.innerHTML;
        
        button.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#10b981;stop-opacity:1" /><stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" /></linearGradient></defs><path d="M20 6L9 17l-5-5" stroke="url(#checkGradient)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        button.style.background = '';
        button.style.borderColor = '';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy bio text: ', err);
    });
}

// Console message for developers
console.log('%c👋 Hi there, developer!', 'color: #8B5CF6; font-size: 20px; font-weight: bold;');
console.log('%cLike the Linear-style design? Let\'s connect!', 'color: #22D3EE; font-size: 14px;');
console.log('%cLinkedIn: https://www.linkedin.com/in/vinodhini-sd/', 'color: #A0A0A0; font-size: 12px;');
console.log('%cBuilt with: HTML, CSS, Vanilla JS', 'color: #6B6B6B; font-size: 11px; font-family: monospace;');

// ============================================
// TESTIMONIALS CAROUSEL FUNCTIONALITY - INFINITE LOOP
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.testimonials-track');
    const originalCards = Array.from(track.querySelectorAll('.testimonial-card'));
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    
    let currentIndex = 0;
    let autoplayInterval;
    const autoplayDelay = 3000; // 3 seconds for smoother continuous feel
    let isTransitioning = false;
    
    // Clone cards for infinite loop effect
    function setupInfiniteLoop() {
        // Clone first and last sets of cards for seamless looping
        const firstClones = originalCards.slice(0, 3).map(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });
        
        const lastClones = originalCards.slice(-3).map(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });
        
        // Add clones to track
        lastClones.forEach(clone => track.insertBefore(clone, track.firstChild));
        firstClones.forEach(clone => track.appendChild(clone));
        
        // Set initial position to first real card (after last clones)
        currentIndex = 3;
        updateCarouselPosition(false);
    }
    
    // Calculate how many cards to show at once based on screen size
    function getCardsPerView() {
        const width = window.innerWidth;
        if (width > 1200) return 3;
        if (width > 768) return 2;
        return 1;
    }
    
    // Update carousel position
    function updateCarouselPosition(animated = true) {
        const allCards = Array.from(track.querySelectorAll('.testimonial-card'));
        if (allCards.length === 0) return;
        
        const cardWidth = allCards[0].offsetWidth;
        const gap = 32; // 2rem gap
        const offset = -(currentIndex * (cardWidth + gap));
        
        if (animated) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            track.style.transition = 'none';
        }
        
        track.style.transform = `translateX(${offset}px)`;
        
        // Update dots (map to original cards only)
        const realIndex = ((currentIndex - 3) % originalCards.length + originalCards.length) % originalCards.length;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }
    
    // Go to specific slide with infinite loop logic
    function goToSlide(index, animated = true) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex = index;
        updateCarouselPosition(animated);
        
        setTimeout(() => {
            handleInfiniteLoop();
            isTransitioning = false;
        }, animated ? 500 : 0);
    }
    
    // Handle infinite loop transition
    function handleInfiniteLoop() {
        const allCards = Array.from(track.querySelectorAll('.testimonial-card'));
        const totalCards = allCards.length;
        
        // If we're at a cloned card, jump to the real equivalent
        if (currentIndex <= 2) {
            // At the beginning clones, jump to end real cards
            currentIndex = originalCards.length + 2 + (currentIndex - 2);
            updateCarouselPosition(false);
        } else if (currentIndex >= totalCards - 3) {
            // At the end clones, jump to beginning real cards
            currentIndex = 3 + (currentIndex - (totalCards - 3));
            updateCarouselPosition(false);
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (isTransitioning) return;
        goToSlide(currentIndex - 1);
        resetAutoplay();
    }
    
    // Next slide
    function nextSlide() {
        if (isTransitioning) return;
        goToSlide(currentIndex + 1);
        resetAutoplay();
    }
    
    // Go to specific dot
    function goToDot(dotIndex) {
        if (isTransitioning) return;
        // Map dot index to track index (offset by 3 for clones)
        goToSlide(dotIndex + 3);
        resetAutoplay();
    }
    
    // Autoplay functionality
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToDot(index));
    });
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarouselPosition(false);
        }, 200);
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Initialize infinite loop
    setupInfiniteLoop();
    startAutoplay();
    
    // Intersection Observer for animation on scroll
    const reviewsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                originalCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                reviewsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reviewsObserver.observe(carousel);
});

// FOOTER SPOTLIGHT EFFECT
const footerSpotlight = document.querySelector('.footer-spotlight');
const footerHeroText = document.querySelector('.footer-hero-text');

if (footerSpotlight && footerHeroText) {
    footerSpotlight.addEventListener('mousemove', (e) => {
        const rect = footerSpotlight.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        footerHeroText.style.setProperty('--x', `${x}%`);
        footerHeroText.style.setProperty('--y', `${y}%`);
    });
    
    // Reset to center when mouse leaves
    footerSpotlight.addEventListener('mouseleave', () => {
        footerHeroText.style.setProperty('--x', '50%');
        footerHeroText.style.setProperty('--y', '50%');
    });
}

// Hero image is styled with CSS gradient fade at the bottom

// VIEW MORE EXPERIENCE FUNCTIONALITY
const viewMoreBtn = document.getElementById('viewMoreBtn');
const hiddenExperiences = document.querySelectorAll('.hidden-experience');

if (viewMoreBtn && hiddenExperiences.length > 0) {
    viewMoreBtn.addEventListener('click', () => {
        // Show hidden experiences with animation
        hiddenExperiences.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
                // Trigger visibility animation
                setTimeout(() => {
                    item.classList.add('visible');
                }, 50);
            }, index * 100);
        });
        
        // Hide the button with fade out
        viewMoreBtn.style.opacity = '0';
        viewMoreBtn.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            viewMoreBtn.style.display = 'none';
        }, 300);
    });
}

