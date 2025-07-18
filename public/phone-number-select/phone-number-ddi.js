export function phoneDDI() {
    //const marquee = document.querySelector(".marquee_track.is-featured");
    //if (!marquee) return;



    $("input[ms-code-phone-number]").each(function () {
        var input = this;

        var iti = window.intlTelInput(input, {
            preferredCountries: [],
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

        $.get(
            "https://ipinfo.io",
            function (response) {
                var countryCode = response.country;
                iti.setCountry(countryCode);
            },
            "jsonp"
        );

        input.addEventListener("change", formatPhoneNumber);
        input.addEventListener("keyup", formatPhoneNumber);

        function formatPhoneNumber() {
            var formattedNumber = iti.getNumber(
                intlTelInputUtils.numberFormat.NATIONAL
            );
            input.value = formattedNumber;
            //
            //var ddi = "+" + iti.getSelectedCountryData().dialCode;
            //var phone = input.value;


            var ddi = "+" + iti.getSelectedCountryData().dialCode;
            var countryName = iti.getSelectedCountryData().name;
            var phone = input.value.replace(/\D/g, ""); // removes spaces and non-digits

            // Update input with formatted national number
            var formattedNumber = iti.getNumber(intlTelInputUtils.numberFormat.NATIONAL);
            input.value = formattedNumber;

            // Fill hidden fields
            $("#dialCode").val(ddi);
            $("#hiddenCountryName").val(countryName);
            $("#completeNumber").val(ddi + phone);

            // Set values to the target inputs
            //$("#ddi").val(ddi);
            //$("#Phone").val(phone);
            //$("#phone_number_ddi").val(ddi + phone);

        }

    });


    //only allow numbers
    $("input[ms-code-phone-number]").on("input", function () {
        this.value = this.value.replace(/\D/g, "");
    });

    //Enable Scroll
    document.querySelectorAll('.iti__country-list').forEach(list => {
        list.addEventListener('wheel', e => e.stopPropagation());
        list.addEventListener('touchmove', e => e.stopPropagation());
    });





}