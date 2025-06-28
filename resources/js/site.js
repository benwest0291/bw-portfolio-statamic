import Alpine from "alpinejs";
import { initMastheadAnimations, initServicesAnimations } from "./gsap/index.js";
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.css';

window.Alpine = Alpine;

// Mega Menu Component
window.megaMenuComponent = function() {
    return {
        isOpen: false,
        
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        
        closeMenu() {
            this.isOpen = false;
        }
    }
}

Alpine.start();
initMastheadAnimations();
initServicesAnimations();
initTechnologySlider();


// Initialize Technology Slider
function initTechnologySlider() {
    const technologySlider = document.querySelector('.technology-slider');
    if (technologySlider) {
        new Swiper(technologySlider, {
            modules: [Autoplay, Navigation],
            slidesPerView: 'auto',
            spaceBetween: 32,
            loop: true,
            loopAdditionalSlides: 3,
            centeredSlides: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
            },
            speed: 8000,
            freeMode: false,
            allowTouchMove: true,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 32,
                },
                1280: {
                    slidesPerView: 7,
                    spaceBetween: 36,
                },
                1536: {
                    slidesPerView: 8,
                    spaceBetween: 40,
                }
            },
            navigation: {
                nextEl: '.technology-slider-next',
                prevEl: '.technology-slider-prev',
            },
        });
    }
}
