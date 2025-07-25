
export function circleSentences() {
    const element = document.querySelector(".circle-wrapper");
    if (!element) return;


    const wrapper = document.querySelector(".circle-wrapper");
    const wrapperWidth = wrapper.offsetWidth;
    const radius = wrapperWidth / 2;

    const sentences = document.querySelectorAll(".sentence");
    const degreeStep = 20;
    const numSentences = sentences.length;

    // Position each sentence
    sentences.forEach((el, i) => {
        const angle = i * degreeStep;
        const rad = angle * (Math.PI / 180);
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        gsap.set(el, {
            x: x,
            y: y,
            rotation: angle
        });
    });

    // Total rotation
    const totalRotation = -(numSentences - 1) * degreeStep;

    // Ensure starting rotation is always 0
    gsap.set(".circle-wrapper", { rotation: 0 });

    // Rotation animation
    gsap.to(".circle-wrapper", {
        rotation: totalRotation,
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-wrapper",
            start: "center 80%",
            end: "center 40%",
            scrub: true
        }
    });


    /*
    const wrapper = document.querySelector(".circle-wrapper");
    const wrapperWidth = wrapper.offsetWidth;
    const radius = wrapperWidth / 2;

    const sentences = document.querySelectorAll(".sentence");
    const degreeStep = 20; // degrees between each
    const numSentences = sentences.length;

    // Position each sentence around the circle starting from right side (0°)
    sentences.forEach((el, i) => {
        const angle = i * degreeStep;
        const rad = angle * (Math.PI / 180);
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        gsap.set(el, {
            x: x,
            y: y,
            //yPercent: -50, // ✅ center vertically
            rotation: angle // initial rotation aligned with circle
        });
    });


    //const totalRotation = -(numSentences - 1) * degreeStep;
    const totalRotation = -80;

    
    // Animate rotation with ScrollTrigger
    gsap.to(".circle-wrapper", {
        rotation: -80, // negative rotation for opposite direction
        ease: "none",
        scrollTrigger: {
            trigger: ".circle-wrapper",
            start: "center 80%",
            end: "center 40%",
            scrub: true,
            onUpdate: function (self) {
                const progressPercentage = self.progress * 100;

                const sentenceRange = 100 / numSentences;

                sentences.forEach((el, i) => {
                    const sentenceCenter = i * sentenceRange + sentenceRange / 2;

                    const distance = Math.abs(progressPercentage - sentenceCenter);

                    // Blend range wider for smooth overlapping fades
                    const blendRange = sentenceRange * 1.5;

                    // Calculate opacity based on distance, fading to 0 at edge of blendRange
                    let opacity = 1 - (distance / (blendRange / 2));

                    // Clamp between 0 and 1
                    opacity = Math.max(0, Math.min(1, opacity));

                    gsap.to(el, { opacity: opacity, duration: 0.1, overwrite: true });
                });
            }
        }
    });*/

}