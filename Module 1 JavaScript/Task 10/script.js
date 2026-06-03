// Using const for array
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
        name: "Football Tournament",
        category: "Sports",
        seats: 4
    }

];


// DOM Element
const container =
    document.getElementById("eventContainer");


// Function with default parameter
function displayEvents(
    eventList = []
) {

    // Clear old content
    container.innerHTML = "";

    // Using let
    let clonedEvents = [...eventList];

    // Filter Tech events
    let filteredEvents =
        clonedEvents.filter(
            event => event.category !== "Sports"
        );

    // Loop events
    filteredEvents.forEach(event => {

        // Destructuring
        const {
            name,
            category,
            seats
        } = event;

        // Create card
        const card =
            document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h2>${name}</h2>

            <p>
                Category:
                ${category}
            </p>

            <p>
                Seats Left:
                ${seats}
            </p>
        `;

        container.appendChild(card);
    });
}


// Call function
displayEvents(events);