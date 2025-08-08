export function swiperSolves() {
    const element = document.querySelector(".swiper-how-solves");
    if (!element) return;


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
    });


    /*
    swiper.on('slideChange', function () {
        const bullets = document.querySelectorAll('.swiper-pagination-solves .swiper-pagination-bullet');
        bullets.forEach(b => b.classList.remove('swiper-pagination-bullet-active'));
        bullets[this.activeIndex].classList.add('swiper-pagination-bullet-active');
    });*/


    swiper.on('slideChangeTransitionEnd', function () {
        // Remove blur/scale de todos
        document.querySelectorAll('.swiper-how-solves .swiper-slide').forEach(slide => {
            slide.style.filter = 'blur(2px)';
            slide.style.transform = 'scale(0.9)';
        });

        // Aplica no ativo
        const activeSlide = document.querySelector('.swiper-how-solves .swiper-slide-active');
        if (activeSlide) {
            activeSlide.style.filter = 'none';
            activeSlide.style.transform = 'scale(1)';
        }
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