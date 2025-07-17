export function filters() {
    const element = document.querySelector("[filter-button]");
    if (!element) return;


    $(document).ready(function () {

        /*
            var $item = $('[data-filter-show-all-challenge="true"]');
            var $targetList = $('[filter-list-move-static="true"]');
    
            if ($item.length && $targetList.length) {
                $item.prependTo($targetList);
            }
    
    
            // Reset all within group when clicking any filter
    
    
            function updateActiveClasses() {
                $(".filter-group").each(function () {
                    const $group = $(this);
                    const $inputs = $group.find("input[name]");
                    const $active = $inputs.filter(":checked").closest(".filter-button, [fs-list-element='clear']");
                    $group.find(".filter-button, [fs-list-element='clear']").removeClass("is-active");
                    $active.addClass("is-active");
                });
            }
    
            document.addEventListener('fs-cmsfilter-update', function () {
                setTimeout(updateActiveClasses, 1000);
            });
    
            $(document).ready(function () {
                setTimeout(updateActiveClasses, 1000);
            });
    
    
    
            setTimeout(function () {
                $(".filter-dropdown-list").each(function () {
                    $(this).find(".filter-button").first().addClass("is-active");
                });
    
                //$("[filter-button][class*='is-dropdown']").first().click();
            }, 300);
        });
    
    
        //FILTERS DROPDOWNS
        // ——————————————————————————————————————————————————————————————————————
        // ——————————————————————————————————————————————————————————————————————
        // ——————————————————————————————————————————————————————————————————————
    
        $(document).ready(function () {
            $(".filter-dropdown input[type='radio']").on("change", function () {
                const selectedText = $(this).siblings(".filter-button-label").text();
                const dropdown = $(this).closest(".filter-dropdown");
                const toggle = dropdown.find(".filter-dropdown-toggle");
    
                // Update label text
                toggle.find("> div:first-child").text(selectedText);
    
    
            });
        });
    
        */


        //HIDE FIRST 3
        /* $(".success-list-filters .success-story-list-component:lt(3)").hide();
     
     
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
     
             }*/
    });


}