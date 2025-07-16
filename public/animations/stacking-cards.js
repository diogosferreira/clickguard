export function stackingCards() {
    const element = document.querySelector(".stackingcard");
    if (!element) return;



    if ($(window).width() > 991) {

        $(window).on("load", function () {
            const cards = gsap.utils.toArray(".stackingcard");

            cards.forEach((card, i) => {
                const isLast = i === cards.length - 1;

                gsap.to(card, {
                    scale: 0.8 + i * 0.035,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top-=" + 20 * i + " 20%",
                        end: "top 10%",
                        scrub: true,
                        onUpdate: self => {
                            if (!isLast) {
                                const progress = self.progress;
                                const blur = progress * 2;
                                card.style.filter = `blur(${blur}px)`;
                            }
                        }
                    }
                });

                ScrollTrigger.create({
                    trigger: card,
                    start: "top-=" + 20 * i + " 20%",
                    end: "top center",
                    endTrigger: ".end-element",
                    pin: true,
                    pinSpacing: false,
                    id: "card-" + i
                });
            });

            ScrollTrigger.refresh();
        });
    }



    /*const cards = gsap.utils.toArray(".stackingcard");
    
    cards.forEach((card, i) => {
        gsap.to(card, {
            scale: 0.8 + i * 0.035,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top-=" + 40 * i + " 40%",
                end: "top 20%",
                scrub: true
            }
        });
    
        ScrollTrigger.create({
            trigger: card,
            start: "top-=" + 40 * i + " 40%",
            end: "top center",
            endTrigger: ".end-element",
            pin: true,
            pinSpacing: false,
            id: "card-" + i
        });
    });
    
    const title = document.querySelector(".title");
    
    ScrollTrigger.create({
        trigger: title,
        start: "top top",
        end: () => ScrollTrigger.getById("card-" + (cards.length - 1))?.end,
        pin: true,
        pinSpacing: false,
        id: "title"
    });
    
    ScrollTrigger.refresh();
    */
}