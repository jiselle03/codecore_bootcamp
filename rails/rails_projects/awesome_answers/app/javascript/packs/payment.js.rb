const stripe = Stripe("pk_test_cq2VjDU5dXUO5MSUq30mi6ku00uwSoO2G7");

const elements = stripe.elements();

// Custom styling can be passed to options when creating an element.
const style = {
    base: {
        // Add your input styles here
        fontSize: "16px",
        color: "black"
    }
};

// Create an instance of the card element.
const card = elements.create("card", { style: style });

document.addEventListener("DOMContentLoaded", () => {
    // Add an instance of the card element into the 'card-element' <div>
    card.mount('#card-element');

    card.addEventListener("change", function(event) {
        const displayError = document.getElementById("card-errors");
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = "";
        };
    });

    // Create a token or display an error when the form is submitted.
    const form = document.getElementById("payment-form");
    console.log("form: ", form);
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // These events make an AJAX request to the Stripe server to fetch
        // token (or return an error if it can't).
        stripe.createToken(card).then(function(result) {
            if (result.error) {
                // Inform the customer that there was an error
                const errorElement = getElementById("card-errors");
                errorElement.textContent = result.error.message;
            } else {
                // Send the token to your server
                document.getElementById("stripe_token").value = result.token.id;
                document.getElementById("stripe-token-form").submit();
            };
        });
    });
});
