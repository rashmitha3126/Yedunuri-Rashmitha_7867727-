const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const elements = form.elements;

    const name = elements["name"].value.trim();
    const email = elements["email"].value.trim();
    const selectedEvent = elements["event"].value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required";
        isValid = false;
    }

    if (selectedEvent === "") {
        document.getElementById("eventError").textContent =
            "Please select an event";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent =
            `Registration successful for ${selectedEvent}!`;

        form.reset();
    }
});