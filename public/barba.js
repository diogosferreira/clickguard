import { gsapTitles } from './gsap/titles.js';
import { gsapScrollAnimations } from './gsap/scroll-animations.js';
import { initAnimations } from './animations/animations.js';
import { stackingCards } from './animations/stacking-cards.js';
import { featuresImages } from './animations/features-images.js';
import { homeMarquee } from './marquee/home-marquee.js';
import { integrationsMarquee } from './marquee/integrations-marquee.js';
import { whyMarquee } from './marquee/why-marquee.js';
import { homeTabs } from './tabs/home-tabs.js';
import { googleBackground } from './animations/google-background.js';
import { swiperTestimonials } from './swiper/swiper-testimonials.js';
import { swiperSolves } from './swiper/solves.js';
import { menu } from './menu/menu.js';
import { copyright } from './copyright/copyright.js';
import { pricing } from './pricing/pricing.js';
import { expandableCards } from './expandable-cards/expandable-cards.js';
import { expandableCardsOverflow } from './expandable-cards/expandable-cards-overflow.js';
import { expandableCardsPopUp } from './expandable-cards/expandable-popup.js';
import { formatsweprotect } from './ad-engines.js/formats-we-protect.js';
import { circleSentences } from './animations/circle-sentences.js';
import { textMarquee } from './animations/text-marquee.js';



gsapTitles();
featuresImages();
gsapScrollAnimations();

initAnimations();
stackingCards();
homeMarquee();
homeTabs();
googleBackground();
integrationsMarquee();
swiperTestimonials();
swiperSolves();
menu();
copyright();
pricing();
expandableCards();
expandableCardsOverflow();
expandableCardsPopUp();


formatsweprotect();
circleSentences();
textMarquee();
whyMarquee();