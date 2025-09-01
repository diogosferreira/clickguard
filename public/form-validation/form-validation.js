
export function formValidation() {
    const element = document.querySelector("required-field_wrapper");
    if (!element) return;

    document.addEventListener('DOMContentLoaded', () => {

        const form = document.querySelector('form'); // update if needed
        const wrappers = document.querySelectorAll('.required_wrapper');
        let submitAttempted = false;

        function isValid(wrapper) {
            const group = wrapper.querySelector('[data-validate].free-radios-group');
            return group && group.querySelectorAll('input[type="checkbox"]:checked').length > 0;
        }

        function render(wrapper) {
            const error = wrapper.querySelector('.required-field_wrapper');
            const valid = isValid(wrapper);

            // Show error only after submit was attempted
            if (error) error.style.display = (!valid && submitAttempted) ? 'block' : 'none';

            wrapper.classList.toggle('is--error', !valid && submitAttempted);
            wrapper.classList.toggle('is--success', valid);
            return valid;
        }

        // Live: only update visibility after first submit attempt
        wrappers.forEach(wrapper => {
            wrapper.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.addEventListener('change', () => render(wrapper));
            });
            // Initial state: hidden (until submitAttempted = true)
            render(wrapper);
        });

        if (form) {
            form.addEventListener('submit', (e) => {
                submitAttempted = true;
                let allValid = true, firstInvalid = null;

                wrappers.forEach(wrapper => {
                    const valid = render(wrapper);
                    if (!valid && !firstInvalid) firstInvalid = wrapper.querySelector('input[type="checkbox"]');
                    if (!valid) allValid = false;
                });

                if (!allValid) {
                    e.preventDefault();
                    if (firstInvalid) firstInvalid.focus();
                }
            });
        }
    });
}
