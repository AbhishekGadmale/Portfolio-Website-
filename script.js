// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Typing animation
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = ["web apps", "Python scripts", "solutions", "user experiences"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.add('typing');
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

// Start typing animation on load
document.addEventListener('DOMContentLoaded', function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Animate skills on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.skill-card, .project-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state
document.querySelectorAll('.skill-card, .project-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
