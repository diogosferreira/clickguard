export function whyMarquee() {
    const marquee = document.querySelector(".is-why-track");
    if (!marquee) return;

    let tlmar = gsap.timeline({ repeat: -1 });

    tlmar.fromTo(
        marquee,
        { xPercent: 0 },
        { xPercent: -50, duration: 10, ease: "none" }
    );

}