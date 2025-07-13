export function swiperSolves() {
    const element = document.querySelector(".swiper-how-solves");
    if (!element) return;

    const swiper = new Swiper(".swiper-how-solves", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: "auto",
        //slidesPerView: 5,
        loop: false, // optional
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 100, // increase from 150 to 200 or more
            modifier: 3, // slightly increase to amplify depth effect
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination-solves",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });



    $("[data-slide]").on("click", function (e) {
        e.preventDefault();
        const direction = $(this).attr("data-slide");
        if (direction === "next") {
            swiper.slideNext();
        } else if (direction === "prev") {
            swiper.slidePrev();
        }
    });

}