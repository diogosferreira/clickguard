export function expandableCardsOverflow() {
    const element = document.querySelector(".swiper-expandable-cards-overflow");
    if (!element) return;

    if (window.innerWidth > 991) {
        $(".expandable-overflow_wrapper").each(function () {
            const $wrapperEl = $(this);
            const $container = $(".swiper-expandable-cards-overflow");
            const $wrapper = $wrapperEl.find(".swiper-wrapper.is-expandable-overflow");

            if ($container.length === 0 || $wrapper.length === 0) {
                console.warn("Container or wrapper not found in this instance.");
                return; // skip to next instance
            }

            let containerWidth = $container.outerWidth();
            let wrapperWidth = $wrapper.outerWidth();
            let maxShift = wrapperWidth - containerWidth;

            const updateSizes = () => {
                containerWidth = $container.outerWidth();
                wrapperWidth = $wrapper.outerWidth();
                maxShift = wrapperWidth - containerWidth;
            };

            updateSizes();

            $container.on("mousemove", function (e) {
                updateSizes();

                const offsetX = e.pageX - $container.offset().left;
                const progress = offsetX / containerWidth;
                const translateX = -progress * maxShift;

                gsap.to($wrapper[0], {
                    x: translateX,
                    ease: "power1.out",
                    duration: 0.3
                });
            });

            $(window).on("resize", updateSizes);

            // Hover grow animations scoped inside this wrapper
            $wrapper.find(".swiper-slide.is-expandable-card-overflow").on("mouseenter", function () {
                const $slide = $(this);
                const $mask = $slide.find(".expandable-card-image-mask");

                gsap.to($slide[0], {
                    width: "40rem",
                    duration: 0.4,
                    ease: "power1.out"
                });

                gsap.to($mask[0], {
                    width: "50%",
                    duration: 0.4,
                    ease: "power1.out"
                });
            });

            $wrapper.find(".swiper-slide.is-expandable-card-overflow").on("mouseleave", function () {
                const $slide = $(this);
                const $mask = $slide.find(".expandable-card-image-mask");

                gsap.to($slide[0], {
                    width: "23rem",
                    duration: 0.4,
                    ease: "power1.out"
                });

                gsap.to($mask[0], {
                    width: "0%",
                    duration: 0.4,
                    ease: "power1.out"
                });
            });
        });
    } else {
        //IS MOBILE



        var swiper_base = new Swiper(".swiper-expandable-cards-overflow", {
            slidesPerView: 1.5,
            spaceBetween: 32,
            centeredSlides: false,
            loop: false,


            breakpoints: {
                0: {
                    spaceBetween: 16,
                    //slidesPerView: 1,
                },
                1024: {
                    spaceBetween: 40,
                },
                1400: {
                    spaceBetween: 40,
                },
            },
        });


    }



    /*
        const $container = $(".swiper-expandable-cards-overflow");
        const $wrapper = $(".swiper-wrapper.is-expandable-overflow");
    
        if ($container.length === 0 || $wrapper.length === 0) {
            console.warn("Container or wrapper not found.");
        } else {
            let containerWidth = $container.outerWidth();
            let wrapperWidth = $wrapper.outerWidth();
            let maxShift = wrapperWidth - containerWidth;
    
            const updateSizes = () => {
                containerWidth = $container.outerWidth();
                wrapperWidth = $wrapper.outerWidth();
                maxShift = wrapperWidth - containerWidth;
            };
    
            updateSizes();
    
            $container.on("mousemove", function (e) {
                updateSizes(); // update dynamically on each move
    
                const offsetX = e.pageX - $container.offset().left;
                const progress = offsetX / containerWidth;
                const translateX = -progress * maxShift;
    
                gsap.to($wrapper[0], {
                    x: translateX,
                    ease: "power1.out",
                    duration: 0.3
                });
            });
    
            $(window).on("resize", updateSizes);
        }
    
        // Hover grow animations
        $(".swiper-slide.is-expandable-card-overflow").on("mouseenter", function () {
            const $slide = $(this);
            const $mask = $slide.find(".expandable-card-image-mask");
    
            gsap.to($slide[0], {
                width: "40rem",
                duration: 0.4,
                ease: "power1.out"
            });
    
            gsap.to($mask[0], {
                width: "50%",
                duration: 0.4,
                ease: "power1.out"
            });
        });
    
        $(".swiper-slide.is-expandable-card-overflow").on("mouseleave", function () {
            const $slide = $(this);
            const $mask = $slide.find(".expandable-card-image-mask");
    
            gsap.to($slide[0], {
                width: "23rem", // default width
                duration: 0.4,
                ease: "power1.out"
            });
    
            gsap.to($mask[0], {
                width: "0%",
                duration: 0.4,
                ease: "power1.out"
            });
        });
    */
}