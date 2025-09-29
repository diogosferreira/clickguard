export function homeTabs() {
    const tabs = document.querySelector(".tabs_wrapper");
    if (!tabs) return;

    // MOBILE
    // ——————————————————————————————
    // ——————————————————————————————
    // ——————————————————————————————
    if (window.matchMedia("(max-width: 991px)").matches) {

        $(document).on("click", ".tab-button", function (e) {
            const $btn = $(e.target).closest(".tab-button");
            if (!$btn.length) return;

            const offsetPx = 40; // 40px from top

            const $anc = $btn.parents().filter(function () {
                const s = getComputedStyle(this);
                return /(auto|scroll)/.test(s.overflow + s.overflowY + s.overflowX);
            }).first();

            if ($anc.length) {
                const target = $btn.offset().top - $anc.offset().top + $anc.scrollTop() - offsetPx;
                $anc.scrollTop(target);
            } else {
                const target = $btn.offset().top - offsetPx;
                window.scrollTo({ top: target, left: 0, behavior: "auto" });
            }
        });



        $(".tab-button").each(function () {
            const $button = $(this);
            const tabId = $button.attr("data-tab");

            // Find matching tab-panel inside .tabs-content
            const $targetPanel = $(".tabs-content .tab-panel[data-tab='" + tabId + "']");

            // Move button before matching panel
            if ($targetPanel.length) {
                $targetPanel.before($button);
            }
        });



        const $buttons = $('.tab-button').not('.is-overlay');
        const $panels = $('.tab-panel');

        // Initial state: show first panel and its overlay
        $panels.css('display', 'none');
        $panels.first().css('display', 'flex');

        $buttons.each(function (i) {
            const $overlay = $(this).find('.tab-button.is-overlay');
            $overlay.css('display', i === 0 ? 'flex' : 'none');
        });

        $buttons.on('click', function () {
            const index = $buttons.index(this);
            const tabId = $(this).data('tab');

            // Show matching panel, hide others
            $panels.css('display', 'none');
            $panels.filter('[data-tab="' + tabId + '"]').css('display', 'flex');

            // Show only the overlay of the active button
            $buttons.each(function () {
                const $overlay = $(this).find('.tab-button.is-overlay');
                $overlay.css('display', 'none');
            });

            $(this).find('.tab-button.is-overlay').css('display', 'flex');
        });

    } else {
        // DESKTOP
        // ——————————————————————————————
        // ——————————————————————————————
        // ——————————————————————————————
        const $buttons = $('.tab-button').not('.is-overlay');
        const $panels = $('.tab-panel');
        let currentIndex = 0;
        let interval;
        let currentTween = null;

        function showTab(index) {
            const tabId = $buttons.eq(index).data('tab');

            // Hide all panels, show the current
            $panels.css('display', 'none');
            $panels.filter('[data-tab="' + tabId + '"]').css('display', 'block');

            // Reset all overlays and kill any running tween
            $buttons.each(function (i) {
                const $overlay = $(this).find('.tab-button.is-overlay');
                gsap.killTweensOf($overlay);
                gsap.set($overlay, { clipPath: "inset(0 100% 0 0 round 12px)" });
            });

            // Animate the current tab's overlay
            const $currentOverlay = $buttons.eq(index).find('.tab-button.is-overlay');
            currentTween = gsap.fromTo(
                $currentOverlay,
                { clipPath: "inset(0 100% 0 0 round 12px)" },
                {
                    clipPath: "inset(0 0% 0 0 round 12px)",
                    duration: 5,
                    ease: "power1.inOut"
                }
            );
        }

        function nextTab() {
            currentIndex = (currentIndex + 1) % $buttons.length;
            showTab(currentIndex);
        }

        function startCycle() {
            showTab(currentIndex);
            interval = setInterval(nextTab, 5000);
        }

        startCycle();

        // Manual click changes tab and resets timer
        $buttons.on('click', function () {
            const index = $buttons.index($(this));
            if (index !== currentIndex) {
                currentIndex = index;
                clearInterval(interval);
                showTab(currentIndex);
                interval = setInterval(nextTab, 5000);
            }
        });

    }



}