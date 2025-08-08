// Auto-fill hidden UTM and referrer fields and handle AJAX form submission
$(document).ready(function () {
    // Function to get cookie value
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return decodeURIComponent(match[2]);
        return '';
    }

    // Populate UTM and referrer fields
    function populateHiddenFields(form) {
        form.find("input[name='utm_source']").val(getCookie('utm_source'));
        form.find("input[name='utm_medium']").val(getCookie('utm_medium'));
        form.find("input[name='utm_campaign']").val(getCookie('utm_campaign'));
        form.find("input[name='utm_content']").val(getCookie('utm_content'));
        form.find("input[name='utm_term']").val(getCookie('utm_term'));
        form.find("input[name='referrer_url']").val(document.referrer);
    }

    // Handle Webflow form submit via AJAX
    $("form").on("submit", function (e) {
        e.preventDefault();
        const form = $(this);
        populateHiddenFields(form);

        const formData = form.serialize();

        $.ajax({
            type: "POST",
            url: "https://yourwordpressdomain.com/webflow-form.php",
            data: formData,
            success: function (response) {
                //console.log("Form successfully submitted to Brevo API", response);
                form[0].reset();
                // Optional: redirect or show success message
            },
            error: function (xhr) {
                console.error("Error submitting form", xhr);
                // Optional: show error message
            }
        });
    });

    // Optional: Pre-fill form type field
    $("form[data-form-type]").each(function () {
        const formType = $(this).data("form-type");
        $(this).find("input[name='form_type']").val(formType);
    });
});