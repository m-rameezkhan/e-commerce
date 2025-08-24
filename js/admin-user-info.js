// ===== Toggle User Details =====
const detailsButtons = document.querySelectorAll('.details-btn');
const userDetails = document.querySelectorAll('.user-details');

detailsButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();

        const detailsRow = userDetails[index];
        const isVisible = detailsRow.style.display === 'table-row';

        // Hide all other details first (optional, for cleaner UI)
        userDetails.forEach((row, i) => {
            row.style.display = 'none';
            detailsButtons[i].textContent = "View Details";
        });

        // Toggle current
        if (!isVisible) {
            detailsRow.style.display = 'table-row';
            btn.textContent = "Hide Details";
        }
    });
});

// ===== Modal Edit Feature =====
const modal = document.getElementById("editModal");
const closeBtn = document.querySelector(".close-btn");
const editButtons = document.querySelectorAll(".edit-btn");

const editForm = document.getElementById("editUserForm");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const editAddress = document.getElementById("editAddress");
const editPhone = document.getElementById("editPhone");
const editPassword = document.getElementById("editPassword");

let currentRow = null;
let currentDetailsRow = null;

editButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const detailsRow = row.nextElementSibling;

        // Fill modal with values
        editName.value = row.children[0].textContent;
        editEmail.value = row.children[1].textContent;
        editAddress.value = detailsRow.querySelector("p:nth-child(1)").textContent.replace("Address: ", "");
        editPhone.value = detailsRow.querySelector("p:nth-child(2)").textContent.replace("Phone No: ", "");
        editPassword.value = detailsRow.querySelector("p:nth-child(3)").textContent.replace("Password: ", "");

        currentRow = row;
        currentDetailsRow = detailsRow;

        modal.style.display = "flex";
    });
});

// Close modal (X, outside click, ESC key)
function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Handle edit form submit
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (currentRow && currentDetailsRow) {
        currentRow.children[0].textContent = editName.value;
        currentRow.children[1].textContent = editEmail.value;

        currentDetailsRow.querySelector("p:nth-child(1)").textContent = "Address: " + editAddress.value;
        currentDetailsRow.querySelector("p:nth-child(2)").textContent = "Phone No: " + editPhone.value;
        currentDetailsRow.querySelector("p:nth-child(3)").textContent = "Password: " + editPassword.value;
    }

    closeModal();
});

// ===== Search Feature =====
const searchInput = document.getElementById("userSearch");
const userRows = document.querySelectorAll(".user-row");

searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();

    userRows.forEach((row, index) => {
        const detailsRow = userDetails[index];
        const rowText = row.innerText.toLowerCase();
        const detailsText = detailsRow.innerText.toLowerCase();
        const match = rowText.includes(searchTerm) || detailsText.includes(searchTerm);

        row.style.display = match ? "" : "none";
        detailsRow.style.display = "none"; // hide details after search
        detailsButtons[index].textContent = "View Details"; // reset button
    });
});
