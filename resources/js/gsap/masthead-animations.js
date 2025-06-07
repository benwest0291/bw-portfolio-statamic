import { gsap } from "gsap";

/**
 * Initialize masthead animations
 * Handles text fade-up and rosette floating animations
 */
export function initMastheadAnimations() {
    // Check if masthead elements exist
    const mastheadText = document.querySelector('.masthead-text');
    const mastheadRosette = document.querySelector('.masthead-rosette');
    
    if (!mastheadText && !mastheadRosette) {
        return; // Exit if no masthead elements found
    }

    // Set initial states for text elements
    gsap.set('.masthead-text', { 
        opacity: 0, 
        y: 50 
    });
    
    gsap.set('.masthead-buttons', { 
        opacity: 0, 
        y: 30 
    });
    
    // Set initial state for rosette
    gsap.set('.masthead-rosette', { 
        opacity: 0, 
        x: 100,
        y: -20
    });

    // Create timeline for masthead entrance animations
    const entranceTimeline = gsap.timeline({ delay: 0.3 });
    
    // Fade up text elements in sequence
    entranceTimeline
        .to('.masthead-heading', { 
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

    // Add continuous floating animation to rosette
    initRosetteFloating();
}

/**
 * Initialize rosette floating animations
 * Creates organic floating motion with dual movements
 */
function initRosetteFloating() {
    const rosetteImg = document.querySelector('.masthead-rosette img');
    
    if (!rosetteImg) {
        return; // Exit if rosette image not found
    }

    // Primary floating movement
    gsap.to(rosetteImg, {
        duration: 4,
        x: 15,
        y: -15,
        rotation: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
    
    // Secondary movement for more organic motion
    gsap.to(rosetteImg, {
        duration: 6,
        x: -10,
        y: 8,
        rotation: -2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
    });
}
