export function marqueeSpeed() {
    const marquee = document.querySelector(".marquee_track-speed");
    if (!marquee) return;


    /*
    window.addEventListener("load", function () {
        console.log("here");
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
    */



    window.addEventListener("load", function () {
        console.log("💡 Marquee script loaded");

        const marquees = document.querySelectorAll(".marquee_track-speed");

        marquees.forEach((track, index) => {
            console.log(`\n🚀 [Marquee ${index + 1}] Initializing`);

            const speed = 100; // px per second
            const list = track.querySelector(".marquee_list-speed");
            if (!list) {
                console.warn(`[Marquee ${index + 1}] ❌ No .marquee_list-speed found`);
                return;
            }

            // Clone content
            const clone = list.cloneNode(true);
            track.appendChild(clone);
            console.log(`[Marquee ${index + 1}] ✅ List cloned`);

            // Wait for images, fonts, and layout to be fully ready
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const width = list.offsetWidth;
                    console.log(`[Marquee ${index + 1}] 📏 Calculated width: ${width}px`);

                    if (width === 0) {
                        console.warn(`[Marquee ${index + 1}] ❗ Content width is 0. Aborting.`);
                        return;
                    }

                    const duration = width / speed;

                    gsap.set(track, { x: 0 });
                    gsap.to(track, {
                        x: -width,
                        duration: duration,
                        ease: "none",
                        repeat: -1,
                    });

                    console.log(`[Marquee ${index + 1}] 🎬 Animation started (duration: ${duration.toFixed(2)}s)`);
                }, 300); // Delay for dynamic content like Webflow CMS or lazy-loaded items
            });
        });
    });
}