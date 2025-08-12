export function calculator() {
    const element = document.querySelector("[data-pricing-calc-input=true]");
    if (!element) return;


    // Calculator
    // ————————————————————————————————————————————————————————
    // ————————————————————————————————————————————————————————

    //define what user can write
    $("[data-pricing-calc-input=true]").on("input", function () {
        let val = $(this).val();

        // Remove everything except digits, comma, and dot
        val = val.replace(/[^0-9,\.]/g, "");

        // Convert dot to comma
        val = val.replace(/\./g, ",");

        // Split by comma to handle decimals
        let parts = val.split(",");

        if (parts.length > 2) {
            // If user types multiple commas, keep only first decimal
            val = parts[0] + "," + parts[1];
            parts = val.split(",");
        }

        if (parts[1] && parts[1].length > 2) {
            // Limit to 2 decimal places if decimals exist
            parts[1] = parts[1].slice(0, 2);
            val = parts.join(",");
        }

        // Add $ prefix
        $(this).val(`$${val}`);
    });

}