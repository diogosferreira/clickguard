export function pricing() {
    const element = document.querySelector(".pricing-tiers-group");
    if (!element) return;




    // PRICING DROPDOWNS - close all except the first one
    $(".pricing-class-title_wrapper").slice(1).trigger("click");


    // CUSTOM TIERS SELECT
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    $(".price-tier-radio").on("click", function () {
        const $this = $(this);
        const tierIndex = parseInt($this.attr("data-tier").trim());

        // Reset active states
        $(".price-tier-radio").removeClass("is-active");
        $(".tier-border-active").removeClass("is-active");

        // Activate selected radio
        $this.addClass("is-active");

        // Activate the corresponding pricing tier
        const $tier = $(".pricing-swiper_wrapper .pricing-tier_border").eq(tierIndex - 1);
        $tier.find(".tier-border-active").addClass("is-active");
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



    $(function () {
        const $dropdown = $(".currency-dropdown");
        const $toggle = $dropdown.find(".currency-dropdown-toggle");
        const $toggleIcon = $toggle.find(".currency-icon");

        /*function updatePrices($link) {
            const standardMonthly = $link.attr("data-standard-monthly");
            const standardYearly = $link.attr("data-standard-yearly");
            const proMonthly = $link.attr("data-pro-monthly");
            const proYearly = $link.attr("data-pro-yearly");
            const isMonthly = $(".month-radio.is-active").attr("data-month-year") === "month";

            $("[data-price-value='Standard']").text(isMonthly ? standardMonthly : standardYearly);
            $("[data-price-value='Pro']").text(isMonthly ? proMonthly : proYearly);
            $("[data-month-year='text']").text(isMonthly ? "Per month" : "Per year");
        }*/


        function updatePrices($link) {
            const isMonthly = $(".month-radio.is-active").attr("data-month-year") === "month";

            const liteMonthly = $link.attr("data-lite-monthly");
            const liteYearly = $link.attr("data-lite-yearly");
            const standardMonthly = $link.attr("data-standard-monthly");
            const standardYearly = $link.attr("data-standard-yearly");
            const proMonthly = $link.attr("data-pro-monthly");
            const proYearly = $link.attr("data-pro-yearly");

            // Lite (se existir no DOM)
            const $lite = $("[data-price-value='Lite']");
            if ($lite.length) {
                $lite.text(isMonthly ? liteMonthly : liteYearly);
            }

            // Standard
            $("[data-price-value='Standard']").text(isMonthly ? standardMonthly : standardYearly);

            // Pro
            $("[data-price-value='Pro']").text(isMonthly ? proMonthly : proYearly);

            // Label Month/Year
            $("[data-month-year='text']").text(isMonthly ? "Per month" : "Per year");
        }

        function syncToggleFrom($link) {
            $toggleIcon.attr("src", $link.find(".currency-icon").attr("src"));
            $toggle.find("[data-currency-name-template]").text(
                $link.find("[data-currency-name]").text().trim()
            );
        }

        // 1) Currency init
        let $initial = $dropdown.find(".currency-dropdown-link.is-active").first();
        if (!$initial.length) {
            $initial = $dropdown.find(".currency-dropdown-link").first().addClass("is-active");
        }
        syncToggleFrom($initial);
        updatePrices($initial);

        // 2) Tier border init
        const initialTierIndex = parseInt($(".price-tier-radio.is-active").attr("data-tier"), 10) || 1;
        $(".pricing-swiper_wrapper .pricing-tier_border")
            .eq(initialTierIndex - 1)
            .find(".tier-border-active")
            .addClass("is-active");

        // 3) Month toggle
        $(".month-radio").off("click").on("click", function () {
            $(".month-radio").removeClass("is-active");
            $(this).addClass("is-active");
            updatePrices($(".currency-dropdown-link.is-active"));
        });

        // 4) Currency option click
        $dropdown.on("click", ".currency-dropdown-link", function (e) {
            // (don’t stop propagation — not needed)
            const $clicked = $(this);
            $(".currency-dropdown-link").removeClass("is-active");
            $clicked.addClass("is-active");

            syncToggleFrom($clicked);
            updatePrices($clicked);

            $(".currency-dropdown-list, .currency-drop-arrow").removeClass("is-active is-open");
        });

        // 5) Close on outside click (bubble)
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".currency-dropdown").length) {
                $(".currency-dropdown-list, .currency-drop-arrow").removeClass("is-active is-open");
            }
        });

        // 6) OPEN/CLOSE via capture-phase so clicks can’t be blocked by overlays
        document.addEventListener('click', function (e) {
            const toggle = e.target.closest('.currency-dropdown-toggle');
            const insideDropdown = e.target.closest('.currency-dropdown');

            if (toggle) {
                e.preventDefault(); // keep it simple; no stopPropagation

                const $wrap = $(toggle).closest('.currency-dropdown');
                const $list = $wrap.find('.currency-dropdown-list');
                const $arrow = $(toggle).find('.currency-drop-arrow');
                const wasOpen = $list.hasClass('is-active') || $list.hasClass('is-open');

                // Close all menus first
                $('.currency-dropdown-list').removeClass('is-active is-open');
                $('.currency-drop-arrow').removeClass('is-active');

                // Open this one if it was closed
                if (!wasOpen) {
                    $list.addClass('is-active is-open');
                    $arrow.addClass('is-active');
                }
                return; // done
            }

            // Click outside any dropdown during capture? Don't do anything here.
            // (the bubble-phase $(document).on('click') above handles outside close)
            if (!insideDropdown) {
                // no-op here; bubble handler will close
            }
        }, true); // <- capture
    });


    /*
    // CUSTOM TIERS SELECT
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    $(".price-tier-radio").on("click", function () {
        const $this = $(this);
        const tierIndex = parseInt($this.attr("data-tier").trim());

        // Reset active states
        $(".price-tier-radio").removeClass("is-active");
        $(".tier-border-active").removeClass("is-active");

        // Activate selected radio
        $this.addClass("is-active");

        // Activate the corresponding pricing tier
        const $tier = $(".pricing-swiper_wrapper .pricing-tier_border").eq(tierIndex - 1);
        $tier.find(".tier-border-active").addClass("is-active");
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

    $(document).ready(function () {
        const $dropdown = $(".currency-dropdown");
        const $toggle = $dropdown.find(".currency-dropdown-toggle");
        const $dropdownList = $dropdown.find(".currency-dropdown-list");
        const $arrow = $dropdown.find(".currency-drop-arrow");
        const $toggleIcon = $toggle.find(".currency-icon");

        function updatePrices($link) {
            const standardMonthly = $link.attr("data-standard-monthly");
            const standardYearly = $link.attr("data-standard-yearly");
            const proMonthly = $link.attr("data-pro-monthly");
            const proYearly = $link.attr("data-pro-yearly");
            const isMonthly = $(".month-radio.is-active").attr("data-month-year") === "month";

            $("[data-price-value='Standard']").text(isMonthly ? standardMonthly : standardYearly);
            $("[data-price-value='Pro']").text(isMonthly ? proMonthly : proYearly);
            $("[data-month-year='text']").text(isMonthly ? "Per month" : "Per year");
        }



        $toggle.on("click", function (e) {
            console.log("click");
            e.stopPropagation();
            const $thisDropdown = $(this).closest(".currency-dropdown");
            const $thisDropdownList = $thisDropdown.find(".currency-dropdown-list");
            const $thisArrow = $(this).find(".currency-drop-arrow");

            const isOpen = $thisDropdownList.hasClass("is-active");

            // Close all dropdowns before toggling (optional)
            $(".currency-dropdown-list").removeClass("is-active");
            $(".currency-drop-arrow").removeClass("is-active");

            if (!isOpen) {
                $thisDropdownList.addClass("is-active");
                $thisArrow.addClass("is-active");
            } else {

                console.log("remove");
                $thisArrow.removeClass("is-active");

                $(".currency-dropdown-list").removeClass("is-active");
                $(".currency-dropdown-list").removeClass("is-open");
            }
        });



        $dropdown.on("click", ".currency-dropdown-link", function (e) {
            e.stopPropagation();
            const $clicked = $(this);

            $(".currency-dropdown-link").removeClass("is-active");
            $clicked.addClass("is-active");

            $toggleIcon.attr("src", $clicked.find(".currency-icon").attr("src"));
            $toggle.find("[data-currency-name-template]").text($clicked.find("[data-currency-name]").text().trim());

            updatePrices($clicked);
            $dropdownList.removeClass("is-active");
            $arrow.removeClass("is-active");
        });

        $(".month-radio").on("click", function () {
            $(".month-radio").removeClass("is-active");
            $(this).addClass("is-active");
            updatePrices($(".currency-dropdown-link.is-active"));
        });

        $(document).on("click", function (e) {
            if (!$(e.target).closest(".currency-dropdown").length) {
                $dropdownList.removeClass("is-active");
                $arrow.removeClass("is-active");
            }
        });

        const $initial = $(".currency-dropdown-link.is-active").first();
        if ($initial.length) {
            $toggleIcon.attr("src", $initial.find(".currency-icon").attr("src"));
            $toggle.find("[data-currency-name-template]").text($initial.find("[data-currency-name]").text().trim());
            updatePrices($initial);
        }
    });

*/

    //


    // TOP CARDS ANIMATION
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————
    if (window.innerWidth > 991) {
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
    }

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
            slidesPerView: 1.2,
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