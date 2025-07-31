export function indexDropdown() {
    const element = document.querySelector(".index-dropdown");
    if (!element) return;

    $(document).ready(function () {
        const $dropdown = $(".index-dropdown");
        const $linksWrapper = $(".index-links_wrapper");
        const $arrowIcon = $dropdown.find(".link-arrow-icon");

        let isOpen = false;

        function openDropdown() {
            $linksWrapper.css("display", "flex");
            gsap.to($arrowIcon, {
                rotate: -180,
                duration: 0.3,
                ease: "power1.out"
            });
            isOpen = true;
        }

        function closeDropdown() {
            $linksWrapper.css("display", "none");
            gsap.to($arrowIcon, {
                rotate: 0,
                duration: 0.3,
                ease: "power1.out"
            });
            isOpen = false;
        }

        $dropdown.on("click", function () {
            isOpen ? closeDropdown() : openDropdown();
        });

        $(".arrow-link.is-index").on("click", function () {
            if (isOpen) {
                closeDropdown();
            }
        });
    });


}