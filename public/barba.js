import { gsapTitles } from './gsap/titles.js';
import { gsapScrollAnimations } from './gsap/scroll-animations.js';
import { initAnimations } from './animations/animations.js';
import { stackingCards } from './animations/stacking-cards.js';
import { didYouKnow } from './animations/did-you-know.js';
import { featuresImages } from './animations/features-images.js';
import { homeMarquee } from './marquee/home-marquee.js';
import { integrationsMarquee } from './marquee/integrations-marquee.js';
import { whyMarquee } from './marquee/why-marquee.js';
import { marqueeSpeed } from './marquee/marquee-speed.js';
import { homeTabs } from './tabs/home-tabs.js';
import { googleBackground } from './animations/google-background.js';
import { swiperTestimonials } from './swiper/swiper-testimonials.js';
import { swiperSolves } from './swiper/solves.js';
import { swiperCarousselTestimonials } from './swiper/carrousel-testimonials.js';
import { menu } from './menu/menu.js';
import { copyright } from './copyright/copyright.js';
import { pricing } from './pricing/pricing.js';
import { expandableCards } from './expandable-cards/expandable-cards.js';
import { expandableCardsOverflow } from './expandable-cards/expandable-cards-overflow.js';
import { expandableCardsPopUp } from './expandable-cards/expandable-popup.js';
import { formatsweprotect } from './ad-engines.js/formats-we-protect.js';
import { circleSentences } from './animations/circle-sentences.js';
import { textMarquee } from './animations/text-marquee.js';
import { filters } from './filters/filters.js';
import { phoneDDI } from './phone-number-select/phone-number-ddi.js';
import { indexDropdown } from './index-dropdown/index-dropdown.js';
import { glossary } from './glossary/glossary.js';
import { glossaryIndex } from './glossary/glossary-index.js';
import { faqSchema } from './faqs/faq-schema.js';
import { calculator } from './free-demo/calculator.js';
import { formValidation } from './form-validation/form-validation.js';
import { buttonsHover } from './buttons/button-hover.js';



function initAll() {

    // Wait until Webflow finishes its initialization
    /*Webflow && Webflow.destroy(); // optional reset
    Webflow && Webflow.ready && Webflow.ready();

    Webflow && Webflow.require("ix2").init(); // Reinit interactions if needed

    requestAnimationFrame(() => {
    
    */
    exitIntentPopup();
    buttonsHover();
    formValidation();
    calculator();
    faqSchema();
    filters();
    swiperCarousselTestimonials();
    indexDropdown();
    glossary();
    glossaryIndex();
    phoneDDI();

    gsapTitles();
    didYouKnow();
    featuresImages();
    gsapScrollAnimations();

    initAnimations();
    stackingCards();
    homeMarquee();
    marqueeSpeed();
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

    /*}, 50); // small delay ensures DOM is rendered*/


}

// First page load
initAll();


/*

barba.init({
    transitions: [{
        name: 'default-transition',
        leave({ current }) {
            return gsap.to(current.container, { opacity: 0, duration: 0.1 });
        },
        enter({ next }) {
            window.scrollTo(0, 0);
            gsap.fromTo(next.container, { opacity: 0 }, { opacity: 1, duration: 0.1 });
        },
    }],
});

barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
    initAll();
});

*/