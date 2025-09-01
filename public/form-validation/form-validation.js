
export function formValidation() {
    const element = document.querySelector(".required-field_wrapper");
    if (!element) return;

    console.log("validate -  laksdmdlasdlçsakadla");



    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form');
        const wrappers = document.querySelectorAll('.required_wrapper');
        let submitAttempted = false;
        const start = Date.now();

        // Sync hidden select with clicked custom link
        document.querySelectorAll('.custom-dropdown').forEach(dd => {
            const select = dd.querySelector('select');
            if (!select) return;

            dd.querySelectorAll('.custom-dropdown-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();

                    // update Webflow's "current" state
                    dd.querySelectorAll('.custom-dropdown-link').forEach(a => a.classList.remove('w--current'));
                    link.classList.add('w--current');

                    // sync select value only (do NOT change label text)
                    const val = link.textContent.trim();
                    select.value = val;
                    select.dispatchEvent(new Event('change', { bubbles: true }));

                    // validate wrapper
                    const wrapper = dd.closest('.required_wrapper');
                    if (wrapper) renderWrapper(wrapper);
                });
            });
        });

        function isValid(wrapper) {
            const checkGroup = wrapper.querySelector('[data-validate].free-radios-group');
            if (checkGroup) {
                return checkGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
            }
            const select = wrapper.querySelector('select');
            if (select) {
                const v = (select.value || '').trim();
                return v !== '' && !/Monthly PPC Ads Spend/i.test(v);
            }
            return true;
        }

        function renderWrapper(wrapper) {
            const ok = isValid(wrapper);
            const err = wrapper.querySelector('.required-field_wrapper');
            if (err) err.style.display = (!ok && submitAttempted) ? 'block' : 'none';
            wrapper.classList.toggle('is--error', !ok && submitAttempted);
            wrapper.classList.toggle('is--success', ok);
            return ok;
        }

        // live validation for checkboxes + select
        wrappers.forEach(wrapper => {
            wrapper.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.addEventListener('change', () => renderWrapper(wrapper));
            });
            const select = wrapper.querySelector('select');
            if (select) {
                select.addEventListener('change', () => renderWrapper(wrapper));
            }
        });

        if (form) {
            form.addEventListener('submit', e => {
                submitAttempted = true;

                let allValid = true, firstInvalid = null;
                wrappers.forEach(wrapper => {
                    const ok = renderWrapper(wrapper);
                    if (!ok && !firstInvalid) {
                        firstInvalid = wrapper.querySelector('input[type="checkbox"], .custom-dropdown-toggle, select');
                    }
                    if (!ok) allValid = false;
                });

                const tooFast = (Date.now() - start) < 2000;
                if (!allValid || tooFast) {
                    e.preventDefault();
                    if (firstInvalid && !tooFast) firstInvalid.focus();
                    return;
                }

                // Debug
                const sel = form.querySelector('select[name="Monthly-PPC-Ad-Spend"]');
                console.log("Submit values:", {
                    adSpend: sel?.value,
                    platforms: Array.from(form.querySelectorAll('.free-radios-group input[type="checkbox"]:checked')).map(i => i.value)
                });
            });
        }
    });
}
