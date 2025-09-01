
export function formValidation() {
    const element = document.querySelector(".required-field_wrapper");
    if (!element) return;

    console.log("validate -  sjdpdadas");



    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form'); // adjust if needed
        const wrappers = document.querySelectorAll('.required_wrapper');
        let submitAttempted = false;

        function isValid(wrapper) {
            const checkboxGroup = wrapper.querySelector('[data-validate].free-radios-group');
            const select = wrapper.querySelector('select');

            if (checkboxGroup) {
                return checkboxGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
            }
            if (select) {
                const v = (select.value || '').trim();
                return v !== '' && v !== 'Monthly PPC Ads Spend';
            }
            return true;
        }

        function render(wrapper) {
            const error = wrapper.querySelector('.required-field_wrapper');
            const valid = isValid(wrapper);
            if (error) error.style.display = (!valid && submitAttempted) ? 'block' : 'none';
            wrapper.classList.toggle('is--error', !valid && submitAttempted);
            wrapper.classList.toggle('is--success', valid);
            return valid;
        }

        // Sync custom dropdown clicks -> hidden select
        document.querySelectorAll('.custom-dropdown').forEach(dd => {
            const select = dd.querySelector('select');
            const labelEl = dd.querySelector('.custom-dropdown-toggle .text-block-3');
            dd.querySelectorAll('.custom-dropdown-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const val = link.textContent.trim();
                    if (select) {
                        select.value = val;
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                    if (labelEl) labelEl.textContent = val;
                });
            });
        });

        // Live validation hooks
        wrappers.forEach(wrapper => {
            wrapper.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.addEventListener('change', () => render(wrapper));
            });
            const select = wrapper.querySelector('select');
            if (select) {
                select.addEventListener('change', () => render(wrapper));
            }
        });

        if (form) {
            form.addEventListener('submit', (e) => {
                submitAttempted = true;
                let allValid = true, firstInvalid = null;

                wrappers.forEach(wrapper => {
                    const ok = render(wrapper);
                    if (!ok && !firstInvalid) {
                        firstInvalid = wrapper.querySelector('input[type="checkbox"], .custom-dropdown-toggle');
                    }
                    if (!ok) allValid = false;
                });

                if (!allValid) {
                    e.preventDefault();
                    if (firstInvalid) firstInvalid.focus();
                }
            });
        }
    });
}
