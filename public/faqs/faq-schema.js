export function faqSchema() {
    const marquee = document.querySelector(".faq_component");
    if (!marquee) return;

    window.addEventListener("DOMContentLoaded", function () {
        const components = document.querySelectorAll(".faq_component");

        if (components.length === 0) return;

        const faqArray = [];

        components.forEach(component => {
            const questionEl = component.querySelector(".faq-title_wrapper .heading-style-h5 div");
            const answerEl = component.querySelector(".faq-answer-padding div");

            if (questionEl && answerEl) {
                faqArray.push({
                    "@type": "Question",
                    "name": questionEl.textContent.trim(),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answerEl.textContent.trim()
                    }
                });
            }
        });

        if (faqArray.length === 0) return;

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqArray
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(faqSchema);
        document.body.appendChild(script);
    });

}