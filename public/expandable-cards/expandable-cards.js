export function expandableCards() {
    const tabs = document.querySelector(".expandable-card_component");
    if (!tabs) return;


    if (window.innerWidth < 991) {
        var swiper_base = new Swiper(".swiper-expandable-cards", {
            slidesPerView: 1.3,
            spaceBetween: 24,
            centeredSlides: false,
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                },
                767: {
                    slidesPerView: 1.4,
                },

            },
        });
    } else {
        $(".swiper-slide.is-expandable-card").hover(
            function () {
                // On hover in
                gsap.to($(this), {
                    flex: 2,
                    duration: 0.5,
                    ease: "power1.inOut",
                });
                gsap.to($(this).find(".expandable-card-image-mask"), {
                    width: "50%",
                    duration: 0.5,
                    ease: "power1.inOut",
                });
            },
            function () {
                // On hover out
                gsap.to($(this), {
                    flex: 1,
                    duration: 0.5,
                    ease: "power1.inOut",
                });
                gsap.to($(this).find(".expandable-card-image-mask"), {
                    width: "0%",
                    duration: 0.5,
                    ease: "power1.inOut",
                });
            }
        );
    }


}