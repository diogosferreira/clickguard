export function gsapScrollAnimations() {
    const element = document.querySelector(".fraud-matters_wrapper");
    if (!element) return;


    $(".fraud-matters_wrapper").each(function () {
        gsap.fromTo(
            this,
            {
                opacity: 0.1,
                yPercent: 190,
            },
            {
                opacity: 1,
                yPercent: 0,
                ease: "power1.out",
                duration: 1,
                scrollTrigger: {
                    trigger: this,
                    start: "top 90%",
                    end: "top 40%",
                    scrub: true,
                },
            }
        );
    });

}
