import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize services animations
 * Handles card animation and icon pulse
 */

export function initServicesAnimations() {
    // Animate section heading and subheading
    gsap.from(".services-section-heading", {
        opacity: 0,
        y: 32,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services-section-heading",
            start: "top 85%",
        },
    });
    gsap.from(".services-section-subheading", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services-section-subheading",
            start: "top 85%",
        },
    });

    // Slide-in from below for each service card
    gsap.utils.toArray(".gsap-service").forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.13,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
            },
        });
        // Icon pulse/pop in
        const icon = el.querySelector("h3 i");
        if (icon) {
            gsap.fromTo(
                icon,
                { scale: 0.7, opacity: 0 },
                {
                    scale: 1.15,
                    opacity: 1,
                    duration: 0.35,
                    delay: 0.25 + i * 0.13,
                    ease: "elastic.out(1, 0.6)",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    onComplete: () => {
                        gsap.to(icon, {
                            scale: 1,
                            duration: 0.18,
                            ease: "power1.out",
                        });
                    },
                }
            );
        }
    });
}
