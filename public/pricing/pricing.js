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
    /*$(".currency-dropdown-link").on("click", function () {
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
     });*/


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

    // Calculator
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    //define what user can write
    $("[data-pricing-calc-input=true]").on("input", function () {
        let val = $(this).val();

        // Remove everything except digits, comma, and dot
        val = val.replace(/[^0-9,\.]/g, "");

        // Convert dot to comma
        val = val.replace(/\./g, ",");

        // Split by comma to handle decimals
        let parts = val.split(",");

        if (parts.length > 2) {
            // If user types multiple commas, keep only first decimal
            val = parts[0] + "," + parts[1];
            parts = val.split(",");
        }

        if (parts[1] && parts[1].length > 2) {
            // Limit to 2 decimal places if decimals exist
            parts[1] = parts[1].slice(0, 2);
            val = parts.join(",");
        }

        // Add $ prefix
        $(this).val(`$${val}`);
    });

    //Calculator calcs
    function calculateResults() {
        const budgetInput = $("input[data-ad-budget=true]").val().replace(/[^0-9.,]/g, "").replace(",", ".");
        const cpcInput = $("input[data-average-cpc=true]").val().replace(/[^0-9.,]/g, "").replace(",", ".");

        const budget = parseFloat(budgetInput) || 0;
        const cpc = parseFloat(cpcInput) || 0;

        if (budget > 0 && cpc > 0) {
            const invalidRate = 0.2489;
            const totalClicks = budget / cpc;
            const clicksBlocked = totalClicks * invalidRate;
            const savings = clicksBlocked * cpc;

            // Update outputs
            $("[data-clicks-result]").text(Math.round(clicksBlocked));
            $("[data-save-result]").text(`$${savings.toFixed(2)}/mo`);
        } else {
            // If inputs are invalid, clear outputs
            $("[data-clicks-result]").text("0");
            $("[data-save-result]").text("$0.00/mo");
        }
    }

    // Run calculation on input
    $("[data-pricing-calc-input=true]").on("input", function () {
        calculateResults();
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