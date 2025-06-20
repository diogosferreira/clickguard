gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".case-study_component");
const totalCards = cards.length;

// Set perspective on wrapper
document.querySelector(".case-studies_wrapper").style.perspective = "1000px";

// Set initial state: all cards offscreen
cards.forEach((card, i) => {
    card.style.zIndex = i + 1;
    gsap.set(card, {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        y: window.innerHeight,
        scale: 1,
        opacity: 1,
        transformOrigin: "center top"
    });
});

// Create scroll timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section_home-use-cases",
        start: "top 30%",
        end: () => `+=${window.innerHeight * (totalCards + 1)}`,
        scrub: true,
        pin: true,
        markers: true
    }
});

cards.forEach((card, i) => {
    const focusScale = 1;
    const focusY = -100;

    // Move card into focus
    tl.to(card, {
        y: focusY,
        scale: focusScale,
        opacity: 1,
        duration: 0.4
    });

    // Slight delay before affecting the previous cards
    cards.forEach((prev, j) => {
        if (j < i) {
            const stackScale = gsap.utils.mapRange(0, totalCards - 1, 0.85, 1)(j);
            const stackY = gsap.utils.mapRange(0, totalCards - 1, -100, 80)(j);
            tl.to(prev, {
                y: stackY,
                scale: stackScale,
                opacity: 0.7,
                duration: 0.3
            }, "+=0.3"); // delay stack effect slightly after card animates in
        }
    });
});