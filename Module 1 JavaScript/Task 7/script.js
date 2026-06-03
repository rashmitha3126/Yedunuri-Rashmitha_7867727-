// Event data
const events = [
    {
        name: "JavaScript Workshop",
        category: "Tech",
        seats: 5
    },
    {
        name: "Music Festival",
        category: "Entertainment",
        seats: 2
    },
    {
        name: "Coding Bootcamp",
        category: "Tech",
        seats: 3
    }
];


// Access DOM using querySelector()
const container =
    document.querySelector(".event-container");


// Function to display events
function displayEvents() {

    // Clear old UI
    container.innerHTML = "";

    events.forEach((event, index) => {

        // Create card
        const card =
            document.createElement("div");

        card.classList.add("event-card");

        // Add content
        card.innerHTML = `
            <h2>${event.name}</h2>

            <p>
                <strong>Category:</strong>
                ${event.category}
            </p>

            <p>
                <strong>Seats Left:</strong>
                ${event.seats}
            </p>

            <button onclick="register(${index})">
                Register
            </button>

            <button onclick="cancel(${index})">
                Cancel
            </button>
        `;

        // Append card
        container.appendChild(card);
    });
}


// Register function
function register(index) {

    if (events[index].seats > 0) {

        events[index].seats--;

        alert("Registration Successful");
    }
    else {

        alert("No Seats Available");
    }

    // Update UI
    displayEvents();
}


// Cancel function
function cancel(index) {

    events[index].seats++;

    alert("Registration Cancelled");

    // Update UI
    displayEvents();
}


// Initial display
displayEvents();