import Alpine from "alpinejs";
import { initMastheadAnimations } from "./gsap/index.js";

window.Alpine = Alpine;
Alpine.start();

// Initialize GSAP animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMastheadAnimations();
});
