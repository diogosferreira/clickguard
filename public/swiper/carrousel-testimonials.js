export function swiperCarousselTestimonials() {
    const element = document.querySelector(".swiper-carrousel-testimonials");
    if (!element) return;

    console.log("here passa");

    var swiper_base = new Swiper(".swiper-carrousel-testimonials", {
        slidesPerView: "auto",
        spaceBetween: 16,
        freeMode: true,
        loop: false,
        centeredSlides: false,
        /*navigation: {
            nextEl: ".testi-next-arrow",
            prevEl: ".testi-prev-arrow",
        },*/
        /*breakpoints: {
            1024: {
                spaceBetween: 40,
            },
            1400: {
                spaceBetween: 40,
            },
        },*/
    });



}