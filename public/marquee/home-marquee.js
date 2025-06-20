export function homeMarquee() {
    const marquee = document.querySelector(".marquee_track.is-featured");
    if (!marquee) return;

    let tlmar = gsap.timeline({ repeat: -1 });

    tlmar.fromTo(
        marquee,
        { xPercent: 0 },
        { xPercent: -50, duration: 40, ease: "none" }
    );
}