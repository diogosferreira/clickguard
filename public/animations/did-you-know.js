export function didYouKnow() {
    const element = document.querySelector('[data-did-you-know-all-sentence="true"]');
    if (!element) return;

    document.addEventListener("DOMContentLoaded", function () {
        let allSentences = [];
        let usedSentences = [];

        // Grab all sentences into an array
        document.querySelectorAll('[data-did-you-know-all-sentence="true"]').forEach(el => {
            allSentences.push(el.textContent.trim());
        });

        // Function to get a random sentence that hasn't been used
        function getRandomSentence() {
            if (usedSentences.length === allSentences.length) {
                usedSentences = []; // Reset if all used
            }

            const available = allSentences.filter(s => !usedSentences.includes(s));
            const randomSentence = available[Math.floor(Math.random() * available.length)];
            usedSentences.push(randomSentence);
            return randomSentence;
        }

        // Set first sentence
        const displayEl = document.querySelector('[data-did-you-know-sentence="true"]');
        if (displayEl) displayEl.textContent = getRandomSentence();

        // Change on click
        document.querySelector('.did-icon').addEventListener('click', function () {
            const newSentence = getRandomSentence();
            displayEl.textContent = newSentence;
        });
    });

}