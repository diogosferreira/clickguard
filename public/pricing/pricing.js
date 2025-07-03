export function pricing() {
    const element = document.querySelector(".pricing-tiers-group");
    if (!element) return;


    // CUSTOM TIERS SELECT
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    $(".price-tier-radio").on("click", function () {
        const $this = $(this);
        const isAlreadyActive = $this.hasClass("is-active");

        // Step 1: Toggle is-active
        $(".price-tier-radio").removeClass("is-active");

        // Step 2: Get all pricing tiers (first 4 only)
        const $tiers = $(".pricing-swiper_wrapper .pricing-tier_border").slice(0, 4);

        if (isAlreadyActive) {
            // If already active, deactivate and enable all tiers
            $tiers.removeClass("is-disabled");
            return;
        }

        // Activate clicked tier
        $this.addClass("is-active");

        // Step 3: Parse tiers to disable
        const selectedTiers = $this
            .attr("data-tier")
            .split(",")
            .map(t => parseInt(t.trim()));

        // Step 4: Disable matching tiers
        $tiers.each(function (index) {
            const currentIndex = index + 1;
            if (selectedTiers.includes(currentIndex)) {
                $(this).addClass("is-disabled");
            } else {
                $(this).removeClass("is-disabled");
            }
        });
    });

    // MONTH — YEAR DROPDOWN
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    $(".month-radio").on("click", function () {
        $(".month-radio").removeClass("is-active");
        $(this).addClass("is-active");

        const type = $(this).attr("data-month-year");
        const text = type === "year" ? "Per year" : "Per month";

        $("[data-month-year='text']").text(text);
    });

    // CURRENCY DROPDOWN
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    $(".currency-dropdown-link").on("click", function () {
        const $clicked = $(this);
        const $dropdown = $clicked.closest(".w-dropdown");
        const $toggle = $dropdown.find(".w-dropdown-toggle");
        const $list = $dropdown.find(".w-dropdown-list");

        // Update toggle content (icon + text)
        const iconHTML = $clicked.find(".currency-icon").html();
        const labelText = $clicked.find("div").not(".currency-icon").text().trim();

        $toggle.find(".currency-icon").html(iconHTML);
        $toggle.find("div").not(".currency-icon, .currency-drop-arrow").text(labelText);

        // Swap is-active class
        $dropdown.find(".currency-dropdown-link.is-active").removeClass("is-active").show();
        $clicked.addClass("is-active").hide();
    });


    // TOP CARDS ANIMATION
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    ScrollTrigger.create({
        trigger: ".pricing-tiers-group",
        start: "top top",
        onEnter: () => {

            $(".price-number").addClass("is-active");
            $(".pricing-start_wrapper").addClass("is-active");
            document.querySelectorAll("[data-pricing-collapse='true']").forEach((el) => {
                gsap.fromTo(
                    el,
                    { height: el.scrollHeight + "px" },
                    {
                        height: "0rem",
                        duration: 0.5,
                        ease: "power1.inOut",
                    }
                );
            });
        },
        onLeaveBack: () => {
            $(".price-number").removeClass("is-active");
            $(".pricing-start_wrapper").removeClass("is-active");
            document.querySelectorAll("[data-pricing-collapse='true']").forEach((el) => {
                gsap.to(el, {
                    height: el.scrollHeight + "px",
                    duration: 0.5,
                    ease: "power1.inOut",
                    onComplete: () => {
                        el.style.height = "auto";
                    },
                });
            });
        },
    });

    // marquee
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    let tlmar = gsap.timeline({ repeat: -1 });

    tlmar.fromTo(
        ".marquee_track.is-pricing",
        { xPercent: 0 },
        { xPercent: -50, duration: 40, ease: "none" }
    );


    // Calculator
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    // Set only the first component as active on page load
    const $components = $('.pricing-calculator-component');
    $components.removeClass('is-active');
    $components.find('.pricing-calculator-arrow, .pricing-calculator-bg').css('opacity', 0);
    $components.first().addClass('is-active')
        .find('.pricing-calculator-arrow, .pricing-calculator-bg').css('opacity', 1);

    // On click handler
    $components.on('click', function () {
        const $this = $(this);

        // Remove active state from all
        $components.removeClass('is-active');
        $components.find('.pricing-calculator-arrow, .pricing-calculator-bg').css('opacity', 0);

        // Add active to clicked
        $this.addClass('is-active');
        $this.find('.pricing-calculator-arrow, .pricing-calculator-bg').css('opacity', 1);

        // Read attributes and apply to result elements
        const clicks = $this.attr('data-clicks-bloqued');
        const save = $this.attr('data-save');

        $('[data-clicks-result]').text(clicks);
        $('[data-save-result]').text(save);
    });



    // SWIPER CARDS MOBILE
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    if ($(window).width() < 991) {
        var swiper_base = new Swiper(".swiper-pricing", {
            slidesPerView: 1.5,
            speed: 700,
            spaceBetween: 16,
            navigation: {
                nextEl: ".pricing-next-arrow",
                prevEl: ".pricing-prev-arrow",
            },
            breakpoints: {
                0: {
                    spaceBetween: 16,

                },
                1024: {

                },
                1400: {

                },
            },
        });
    }


}