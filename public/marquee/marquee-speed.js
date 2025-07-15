export function marqueeSpeed() {
    const marquee = document.querySelector(".marquee_track-speed");
    if (!marquee) return;


    window.addEventListener("load", function () {
        const marquees = document.querySelectorAll(".marquee_track-speed");

        marquees.forEach(track => {
            const speed = 100; // pixels per second
            const list = track.querySelector(".marquee_list-speed");

            if (!list) return;

            const clone = list.cloneNode(true);
            track.appendChild(clone);

            const images = track.querySelectorAll("img");
            let loaded = 0;

            images.forEach(img => {
                if (img.complete) loaded++;
                else img.addEventListener("load", () => {
                    loaded++;
                    if (loaded === images.length) startMarquee(track, list);
                });
            });

            if (loaded === images.length) startMarquee(track, list);

            function startMarquee(track, list) {
                const width = list.offsetWidth;
                const duration = width / speed;

                gsap.set(track, { x: 0 });
                gsap.to(track, {
                    x: -width,
                    duration: duration,
                    ease: "none",
                    repeat: -1,
                });
            }
        });
    });
}