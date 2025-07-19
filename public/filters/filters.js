export function filters() {
    const element = document.querySelector("[filter-button]");
    if (!element) return;


    $(document).ready(function () {


        var $item = $('[data-filter-show-all-challenge="true"]');
        var $targetList = $('[filter-list-move-static="true"]');

        if ($item.length && $targetList.length) {
            $item.prependTo($targetList);
        }


        // Reset all within group when clicking any filter

        $(document).on("click", ".filter-button, [fs-list-element='clear']", function () {
            const $group = $(this).closest(".filter-group");
            setTimeout(function () {
                $group.find(".filter-button, [fs-list-element='clear']").removeClass("is-active");
                $(this).addClass("is-active");
            }.bind(this), 10);
        });


        $(document).on("click", "[fs-list-element='clear']", function (e) {
            const $group = $(this).closest(".filter-group");

            // Uncheck all radios in the group
            $group.find("input[type='radio']").prop("checked", false);

            // Clean active classes
            $group.find(".filter-button, [fs-list-element='clear']").removeClass("is-active");
            $(this).addClass("is-active");
        });



        // ————

        /*setTimeout(function () {
            $(".filter-dropdown-list").each(function () {
                $(this).find(".filter-button").first().addClass("is-active");
            });

            //$("[filter-button][class*='is-dropdown']").first().click();
        }, 300);*/
    });


    //FILTERS DROPDOWNS
    // ——————————————————————————————————————————————————————————————————————
    // ——————————————————————————————————————————————————————————————————————
    // ——————————————————————————————————————————————————————————————————————

    /*$(document).ready(function () {
        $(".filter-dropdown input[type='radio']").on("change", function () {
            const selectedText = $(this).siblings(".filter-button-label").text();
            const dropdown = $(this).closest(".filter-dropdown");
            const toggle = dropdown.find(".filter-dropdown-toggle");

            // Update label text
            toggle.find("> div:first-child").text(selectedText);


        });
    });*/

    $(document).ready(function () {
        $(".filter-dropdown input[type='radio']").on("change", function () {
            const $this = $(this);
            setTimeout(function () {
                const selectedText = $this.closest("label").find(".filter-button-label").text().trim();
                const dropdown = $this.closest(".filter-dropdown");
                const toggle = dropdown.find(".filter-dropdown-toggle");
                toggle.find("> div:first-child").text(selectedText);

                // Close dropdown by triggering click
                if (dropdown.hasClass("w--open")) toggle.trigger("click");
            }, 20);
        });

        $(".filter-dropdown").on("click", "[all-filter-button]", function (e) {
            e.preventDefault();
            const $this = $(this);
            setTimeout(function () {
                const selectedText = $this.find("div").first().text().trim();
                const dropdown = $this.closest(".filter-dropdown");
                const toggle = dropdown.find(".filter-dropdown-toggle");
                toggle.find("> div:first-child").text(selectedText);

                // Close dropdown by triggering click
                if (dropdown.hasClass("w--open")) toggle.trigger("click");
            }, 20);
        });
    });




    //HIDE FIRST 3
    /*
    $(".success-list-filters .success-story-list-component:lt(3)").hide();


    $(document).on("click", function () {
        let hasActive = false;

        $(".filter-group").each(function () {
            const $buttons = $(this).find(".filter-button");
            const $otherButtons = $buttons.not($buttons.first());

            if ($otherButtons.is(".is-active")) {
                hasActive = true;
            }
        });

        if (hasActive) {
            //console.log("At least one filter (not 'show all') is active on the page.");
            setTimeout(function () {
                $(".filters-active-hide").hide();
            }, 150);
            $(".success-list-filters .success-story-list-component:lt(3)").show();
        } else {

            //console.log("Only 'show all' is active everywhere.");
            $(".filters-active-hide").show();

        }
    });*/

    // HIDE FIRST 3 BY DEFAULT
    $(".success-list-filters .success-story-list-component:lt(3)").hide();

    $(document).on("click", function () {
        setTimeout(function () {
            let hasActive = $("label.filter-button.is-active").not("[all-filter-button]").length > 0;
            //console.log("hasActive =", hasActive);

            if (hasActive) {
                $(".filters-active-hide").hide();
                $(".section-success-trusted-banner-secondary").show();
                $(".success-list-filters .success-story-list-component:lt(3)").show();
            } else {
                //console.log("não tem");
                $(".filters-active-hide").show();
                $(".section-success-trusted-banner-secondary").hide();
                $(".success-list-filters .success-story-list-component:lt(3)").hide();
            }
        }, 100); // Adjust delay if needed
    });

}