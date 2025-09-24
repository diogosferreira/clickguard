
export function exitIntentPopup() {
    const element = document.querySelector(".exit-intent_popup");
    if (!element) return;


    document.addEventListener("mouseleave", function (event) {
        if (event.clientY <= 0 && !sessionStorage.getItem("exitIntentShown")) {
            const popup = document.querySelector(".exit-intent_popup");
            if (popup) {
                popup.style.display = "block";
                popup.style.zIndex = "999";
                sessionStorage.setItem("exitIntentShown", "true");
            }
        }
    });


}