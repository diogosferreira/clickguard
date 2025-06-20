
export function googleBackground() {
    const googleBackground = document.querySelector(".google-background");
    if (!googleBackground) return;

    gsap.to(".google-background", {
        backgroundPositionX: "-200%", // Move the gradient smoothly
        duration: 5,
        ease: "linear",
        repeat: -1,
    });

}