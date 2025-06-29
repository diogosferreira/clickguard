import { initAnimations } from './animations/animations.js';
import { homeMarquee } from './marquee/home-marquee.js';
import { integrationsMarquee } from './marquee/integrations-marquee.js';
import { homeTabs } from './tabs/home-tabs.js';
import { googleBackground } from './animations/google-background.js';
import { swiperTestimonials } from './swiper/swiper-testimonials.js';
import { menu } from './menu/menu.js';
import { copyright } from './copyright/copyright.js';

initAnimations();
homeMarquee();
homeTabs();
googleBackground();
integrationsMarquee();
swiperTestimonials();
menu();
copyright();
