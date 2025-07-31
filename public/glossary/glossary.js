export function glossary() {
    const element = document.querySelector(".inital-glossary-letter");
    if (!element) return;


    $(document).ready(function () {
        let currentLetter = "";
        const $filterWrapper = $(".glossary-filters_wrapper");

        // Clear previous letter headings
        $(".inital-glossary-letter").remove();

        // Remove only filter buttons that are NOT "All"
        $filterWrapper.find("a.filter-button").not(':has(.filter-button-label:contains("All"))').remove();

        $(".glossary-item").each(function () {
            const term = $(this).find(".heading-style-h5 > div").text().trim();
            const firstLetter = term.charAt(0).toUpperCase();

            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;

                // Insert glossary section header
                const $newLetterDiv = $(`
        <div class="inital-glossary-letter" id="${currentLetter}" style="width:100%;display:block;clear:both;">
          <div class="text-size-extra-small">
            <div>${currentLetter}</div>
          </div>
        </div>
      `);
                $(this).before($newLetterDiv);

                // Create and append filter button
                const $filterBtn = $(`
        <a href="#${currentLetter}" class="filter-button w-inline-block">
          <div class="filter-button-label">${currentLetter}</div>
        </a>
      `);
                $filterWrapper.append($filterBtn);
            }
        });

        // Handle active state on filter button click
        $(".glossary-filters_wrapper").on("click", "a.filter-button", function () {
            $(".glossary-filters_wrapper a.filter-button").removeClass("is-active");
            $(this).addClass("is-active");
        });
    });

}