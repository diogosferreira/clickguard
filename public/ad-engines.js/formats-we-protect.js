export function formatsweprotect() {
    const tabs = document.querySelector(".swiper-formats");
    if (!tabs) return;


    if (window.innerWidth < 991) {
        var swiper_base = new Swiper(".swiper-formats", {
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
    }


}