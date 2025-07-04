export function gsapTitles() {
    const element = document.querySelector("[data-text-split='true']");
    if (!element) return;




    document.querySelectorAll("[data-text-split='true']").forEach((text) => {
        const split = new SplitText(text, {
            type: "words, chars",
            mask: "words",
            wordsClass: "word",
            charsClass: "char",
        });



        gsap.set(text, { visibility: "visible" });
    });
}
