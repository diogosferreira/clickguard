export function glossaryIndex() {
    const element = document.querySelector(".is-index-page");
    if (!element) return;


    $(document).ready(function () {
        const $richText = $(".text-rich-text");
        const $indexWrapper = $(".index-links_wrapper");

        const $templateOriginal = $indexWrapper.find("a.arrow-link").first();
        const $templateLink = $templateOriginal.clone();
        $templateOriginal.remove();

        $richText.find("h2").each(function () {
            const headingText = $(this).text().trim();
            const anchorId = headingText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

            $(this).attr("id", anchorId);

            const $newLink = $templateLink.clone();
            $newLink.attr("data-anchor", anchorId);
            $newLink.find(".text-size-extra-small > div").text(headingText);

            $indexWrapper.append($newLink);
        });

        Webflow.require("ix2").init();

        // Smooth scroll with offset (using data-anchor)
        $(".index-links_wrapper").on("click", "a.arrow-link", function (e) {
            e.preventDefault();

            const anchorId = $(this).attr("data-anchor");
            const $target = $("#" + anchorId);

            if ($target.length) {
                $("html, body").animate({
                    scrollTop: $target.offset().top - 100
                }, 600);
            }
        });
    });

}