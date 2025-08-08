export function swiperSolves() {
    const element = document.querySelector(".swiper-how-solves");
    if (!element) return;

    /*
        const swiper = new Swiper(".swiper-how-solves", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            initialSlide: 2, 
            slidesPerView: "auto",
            loop: false,
            watchSlidesProgress: true,
    
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 3,
                slideShadows: false,
            },
    
            pagination: {
                el: ".swiper-pagination-solves",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });*/


    /*
    swiper.on('slideChange', function () {
        const bullets = document.querySelectorAll('.swiper-pagination-solves .swiper-pagination-bullet');
        bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));
        bullets[this.activeIndex].classList.add('swiper-pagination-bullet-active');
    });*/



    const swiper = new Swiper(".swiper-how-solves", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: "auto",
        loop: false,
        watchSlidesProgress: true,
        coverflowEffect: { rotate: 0, stretch: 50, depth: 100, modifier: 3, slideShadows: false },
        pagination: {
            el: ".swiper-pagination-solves",
            clickable: true,
            renderBullet: (i, className) => `<span class="${className}"></span>`
        }
    });


    $("[data-slide]").on("click", function (e) {
        e.preventDefault();
        const dir = $(this).attr("data-slide");
        dir === "next" ? swiper.slideNext() : swiper.slidePrev();
    });


    swiper.on('slideChangeTransitionEnd', () => swiper.updateSlidesClasses());


    /*
        $("[data-slide]").on("click", function (e) {
            e.preventDefault();
            const direction = $(this).attr("data-slide");
            if (direction === "next") {
                swiper.slideNext();
            } else if (direction === "prev") {
                swiper.slidePrev();
            }
        });
    */

}