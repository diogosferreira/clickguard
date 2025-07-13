
export function textMarquee() {
    const element = document.querySelector(".marquee_track.is-pricing");
    if (!element) return;

    // marquee
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    let tlmar = gsap.timeline({ repeat: -1 });

    tlmar.fromTo(
        ".marquee_track.is-pricing",
        { xPercent: 0 },
        { xPercent: -50, duration: 40, ease: "none" }
    );


}