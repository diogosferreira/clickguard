
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






    // MENU DROPDOWNS OPEN
    $(".menu-dropdown-toggle").each(function () {
        const $toggle = $(this);
        const $dropdown = $toggle.closest(".menu-dropdown");
        const $wrapper = $dropdown.find(".menu-dropdown_wrapper");
        const $image = $dropdown.find(".menu-dropdown-image_wrapper");
        const $links = $dropdown.find(".arrow-link");

        // Define timeline paused initially
        const tl = gsap.timeline({ paused: true });

        // Animation for wrapper
        if ($(window).width() > 991) {
            tl.fromTo(
                $wrapper[0],
                { clipPath: "inset(0% 0% 100% 0% round 8px)" },
                { clipPath: "inset(0% 0% 0% 0% round 8px)", ease: "power2.inOut", duration: 0.7 }
            );
        }

        // Animation for image with small delay
        tl.fromTo(
            $image[0],
            { clipPath: "inset(0% 0% 100% 0% round 8px)" },
            { clipPath: "inset(0% 0% 0% 0% round 8px)", ease: "power2.inOut", duration: 0.7 },
            "<+0.1"
        );

        // Stagger fade-in for links after wrapper and image animations
        tl.fromTo(
            $links,
            { opacity: 0, y: 2 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1 },
            "<+0.3"
        );

        // Animate words inside the dropdown description on open
        tl.fromTo(
            $dropdown.find(".word"),
            { y: "100%" }, // initial state: off below
            {
                y: "0%",
                duration: .7,
                ease: "power3.out",
                stagger: { amount: 0.1 },
            },
            "<+0.12" // adjust timing relative to previous animations
        );

        // Click handler
        $toggle.on("click", function () {
            setTimeout(() => {
                const isOpen = $toggle.attr("aria-expanded") === "true";

                if (isOpen) {
                    console.log("Dropdown opened");
                    tl.timeScale(1).play();
                } else {
                    console.log("Dropdown closed");
                    tl.pause(0); // instantly reset timeline to initial state
                }
            }, 10);
        });

        // Observe aria-expanded changes for external closes (e.g. clicking another dropdown)
        if ($toggle[0]) {
            const observer = new MutationObserver(() => {
                const isOpen = $toggle.attr("aria-expanded") === "true";
                if (!isOpen) {
                    tl.pause(0); // instantly reset timeline when closed externally
                }
            });

            observer.observe($toggle[0], { attributes: true, attributeFilter: ["aria-expanded"] });
        }
    });
}
