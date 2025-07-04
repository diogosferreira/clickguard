import { gsapTitles } from './gsap/titles.js';
import { gsapScrollAnimations } from './gsap/scroll-animations.js';
import { initAnimations } from './animations/animations.js';
import { homeMarquee } from './marquee/home-marquee.js';
import { integrationsMarquee } from './marquee/integrations-marquee.js';
import { homeTabs } from './tabs/home-tabs.js';
import { googleBackground } from './animations/google-background.js';
import { swiperTestimonials } from './swiper/swiper-testimonials.js';
import { menu } from './menu/menu.js';
import { copyright } from './copyright/copyright.js';
import { pricing } from './pricing/pricing.js';
import { expandableCards } from './expandable-cards/expandable-cards.js';
import { formatsweprotect } from './ad-engines.js/formats-we-protect.js';



gsapTitles();
gsapScrollAnimations();

initAnimations();
homeMarquee();
homeTabs();
googleBackground();
integrationsMarquee();
swiperTestimonials();
menu();
copyright();
pricing();
expandableCards();


formatsweprotect();