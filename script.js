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
    const bioText = document.getElementById('bio-text');
    bioText.select();
    bioText.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(bioText.value).then(() => {
        const button = document.querySelector('.btn-copy-bio');
        const originalHTML = button.innerHTML;
        
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Copied!';
        button.style.background = 'rgba(34, 197, 94, 0.1)';
        button.style.borderColor = 'rgba(34, 197, 94, 0.3)';
        button.style.color = '#22c55e';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Console message for developers
console.log('%c👋 Hi there, developer!', 'color: #8B5CF6; font-size: 20px; font-weight: bold;');
console.log('%cLike the Linear-style design? Let\'s connect!', 'color: #22D3EE; font-size: 14px;');
console.log('%cLinkedIn: https://www.linkedin.com/in/vinodhini-sd/', 'color: #A0A0A0; font-size: 12px;');
console.log('%cBuilt with: HTML, CSS, Vanilla JS', 'color: #6B6B6B; font-size: 11px; font-family: monospace;');

