export function expandableCardsPopUp() {
    const element = document.querySelector("[data-card-id]");
    if (!element) return;

    $("[data-card-id]").on("click", function () {
        const id = $(this).attr("data-card-id");
        $("[data-popup-id='" + id + "']").css("display", "flex");
    });

}