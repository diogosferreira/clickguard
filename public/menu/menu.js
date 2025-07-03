
export function menu() {

    if (window.matchMedia("(min-width: 991px)").matches) {
        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 100) {

                    $(".nav_wrapper").addClass("is-scrolled");
                    $(".menu-logo").addClass("is-light-theme");
                    $(".menu-dropdown-toggle").addClass("is-dark-mode");
                    $("[data-menu-button='true']").addClass("is-white");

                    // Show/hide navbar based on scroll direction
                    if (self.direction === -1) {
                        // Show navbar on scroll up
                        /*gsap.to(".nav_fixed", {
                            yPercent: 0,
                            duration: 0.9,
                            ease: "power2.out",
                        });*/
                    } else {
                        // Hide navbar on scroll down
                        /* gsap.to(".nav_fixed", {
                             yPercent: -100,
                             duration: 0.9,
                             ease: "power2.out",
                         });*/
                    }
                } else {

                    $(".nav_wrapper").removeClass("is-scrolled");
                    $(".menu-logo").removeClass("is-light-theme");
                    $(".menu-dropdown-toggle").removeClass("is-dark-mode");
                    $("[data-menu-button='true']").removeClass("is-white");


                    // Always show navbar if less than 100px scrolled
                    gsap.to(".nav_fixed", {
                        yPercent: 0,
                        duration: 0.9,
                        ease: "power2.out",
                    });
                }
            },
        });
    }
}
