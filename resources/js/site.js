import Alpine from "alpinejs";
import { gsap } from "gsap";

window.Alpine = Alpine;
Alpine.start();

// GSAP Animations for masthead block
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states
    gsap.set('.masthead-text', { 
        opacity: 0, 
        y: 50 
    });
    
    gsap.set('.masthead-buttons', { 
        opacity: 0, 
        y: 30 
    });
    
    gsap.set('.masthead-rosette', { 
        opacity: 0, 
        x: 100,
        y: -20
    });

    // Create timeline for masthead animations
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Fade up text elements
    tl.to('.masthead-heading', { 
        duration: 1, 
        opacity: 1, 
        y: 0, 
        ease: "power2.out" 
    })
    .to('.masthead-sub-heading', { 
        duration: 0.8, 
        opacity: 1, 
        y: 0, 
        ease: "power2.out" 
    }, "-=0.6")
    .to('.masthead-buttons', { 
        duration: 0.8, 
        opacity: 1, 
        y: 0, 
        ease: "power2.out" 
    }, "-=0.4")
    .to('.masthead-rosette', { 
        duration: 1.2, 
        opacity: 1, 
        x: 0, 
        y: 0, 
        ease: "elastic.out(1, 0.75)" 
    }, "-=0.6");

    // Add floating animation to rosette
    gsap.to('.masthead-rosette img', {
        duration: 4,
        x: 15,
        y: -15,
        rotation: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
    
    // Add secondary movement for more organic motion
    gsap.to('.masthead-rosette img', {
        duration: 6,
        x: -10,
        y: 8,
        rotation: -2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
    });
});
