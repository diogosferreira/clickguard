
export function featuresImages() {
    const element = document.querySelector(".features-hero-image_wrapper");
    if (!element) return;


    // TOP IMAGE
    gsap.to(".features-hero-image_wrapper", {
        scrollTrigger: {
            trigger: ".section_hero-features",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        rotationX: -25,
        ease: "none"
    });

    gsap.to(".feature-hero-image", {
        scrollTrigger: {
            trigger: ".features-hero-image_wrapper",
            start: "top 20%",
            end: "bottom top",
            scrub: true
        },
        yPercent: 200,
        ease: "none"
    });


    // BOTTOM IMAGE

    gsap.fromTo(".feature-bottom-image",
        { yPercent: -130 },
        {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".features-dashboard-bottom",
                start: "top 75%",
                end: "top 25%",
                scrub: true
            }
        }
    );

}