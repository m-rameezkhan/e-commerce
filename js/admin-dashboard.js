// Get all cards
const cards = document.querySelectorAll(".card");

// Get all forms
const forms = document.querySelectorAll(".product-form, .category-form, .offers-form, .testimonial-form");

// Function to hide all forms
function hideAllForms() {
    forms.forEach(form => form.style.display = "none");
}

// Add event listeners to each card
cards.forEach(card => {
    card.addEventListener("click", () => {
        hideAllForms(); // Hide everything first

        let targetForm = null;

        if (card.id === "add-product") {
            targetForm = document.getElementById("product-form");
        } else if (card.id === "add-category") {
            targetForm = document.getElementById("category-form");
        } else if (card.id === "add-offers") {
            targetForm = document.getElementById("offers-form");
        } else if (card.id === "add-testimonial") {
            targetForm = document.getElementById("testimonial-form");
        }

        if (targetForm) {
            targetForm.style.display = "block";
            targetForm.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});


// Hide all forms initially
hideAllForms();
