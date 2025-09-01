
export function formValidation() {
    const element = document.querySelector(".required-field_wrapper");
    if (!element) return;

    console.log("validate -  sjdpdadas");



    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('form'); // adjust if needed
        let submitAttempted = false;

        function syncCustomDropdowns(scope = document) {
            scope.querySelectorAll('.custom-dropdown').forEach(dd => {
                const select = dd.querySelector('select');
                if (!select) return;

                // current label or selected link text
                const currentLink = dd.querySelector('.custom-dropdown-link.w--current');
                const labelEl = dd.querySelector('.custom-dropdown-toggle .text-block-3');
                const picked = (currentLink?.textContent || labelEl?.textContent || '').trim();

                if (!picked) return;

                // ensure an option exists with this value; create if missing
                let opt = Array.from(select.options).find(o => o.value === picked);
                if (!opt) {
                    opt = new Option(picked, picked);
                    select.add(opt);
                }

                // disable placeholder options
                Array.from(select.options).forEach(o => {
                    if (o.value === '' || /Monthly PPC Ads Spend/i.test(o.value)) o.disabled = true;
                });

                select.value = picked;
                select.dispatchEvent(new Event('change', { bubbles: true }));
            });
        }

        function isValidWrapper(wrapper) {
            // checkbox group
            const checkGroup = wrapper.querySelector('[data-validate].free-radios-group');
            if (checkGroup) {
                return checkGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
            }
            // select group
            const select = wrapper.querySelector('select');
            if (select) {
                const v = (select.value || '').trim();
                return v !== '' && !/Monthly PPC Ads Spend/i.test(v);
            }
            return true;
        }

        function renderWrapper(wrapper) {
            const ok = isValidWrapper(wrapper);
            const err = wrapper.querySelector('.required-field_wrapper');
            if (err) err.style.display = (!ok && submitAttempted) ? 'block' : 'none';
            wrapper.classList.toggle('is--error', !ok && submitAttempted);
            wrapper.classList.toggle('is--success', ok);
            return ok;
        }

        // Hook custom dropdown clicks to keep select in sync
        document.querySelectorAll('.custom-dropdown').forEach(dd => {
            dd.querySelectorAll('.custom-dropdown-link').forEach(link => {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    // mark clicked link as current (Webflow usually toggles this)
                    dd.querySelectorAll('.custom-dropdown-link').forEach(a => a.classList.remove('w--current'));
                    link.classList.add('w--current');

                    const labelEl = dd.querySelector('.custom-dropdown-toggle .text-block-3');
                    if (labelEl) labelEl.textContent = link.textContent.trim();

                    syncCustomDropdowns(dd);
                    const wrapper = dd.closest('.required_wrapper');
                    if (wrapper) renderWrapper(wrapper);
                });
            });
        });

        // Checkbox live validation (after submit attempt only show error)
        document.querySelectorAll('.required_wrapper input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                const w = cb.closest('.required_wrapper');
                if (!w) return;
                renderWrapper(w);
            });
        });

        // Initial sync (in case a value is already selected)
        syncCustomDropdowns();
        document.querySelectorAll('.required_wrapper').forEach(renderWrapper);

        // Submit
        if (form) {
            // simple anti-bot timing (optional but helps with 422 from Bot Protection)
            const start = Date.now();

            form.addEventListener('submit', e => {
                submitAttempted = true;

                // Ensure selects are synced right before submit
                syncCustomDropdowns();

                let allValid = true, firstInvalid = null;
                document.querySelectorAll('.required_wrapper').forEach(w => {
                    const ok = renderWrapper(w);
                    if (!ok && !firstInvalid) {
                        firstInvalid = w.querySelector('input[type="checkbox"], .custom-dropdown-toggle, select');
                    }
                    if (!ok) allValid = false;
                });

                // Anti-bot: require at least 2s on page (tune if needed)
                const tooFast = (Date.now() - start) < 2000;

                if (!allValid || tooFast) {
                    e.preventDefault();
                    if (firstInvalid && !tooFast) firstInvalid.focus();
                    if (tooFast) console.warn('Submission blocked: too fast (anti-bot).');
                    return;
                }

                // Debug: log values being sent
                const sel = document.querySelector('select[name="Monthly-PPC-Ad-Spend"]');
                console.log('Monthly-PPC-Ad-Spend =', sel?.value);
                console.log('Checked platforms =', Array.from(document.querySelectorAll('.free-radios-group input[type="checkbox"]:checked')).map(i => i.value));
            });
        }
    });
}
