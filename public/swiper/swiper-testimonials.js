export function swiperTestimonials() {
    const swiper = document.querySelector(".swiper-testimonials");
    if (!swiper) return;

    var swiper_base = new Swiper(".swiper-testimonials", {
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: false,
        loop: false,

        navigation: {
            nextEl: ".testi-next-arrow",
            prevEl: ".testi-prev-arrow",
        },
        breakpoints: {
            0: {
                spaceBetween: 16,
                slidesPerView: 1,
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