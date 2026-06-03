// Event list
const events = [
    {
        name: "Music Festival",
        date: "2026-08-10",
        seats: 20
    },
    {
        name: "Old Workshop",
        date: "2024-01-10",
        seats: 15
    },
    {
        name: "Tech Seminar",
        date: "2026-09-05",
        seats: 0
    }
];

// Get today's date
const today = new Date();

// Get HTML div
const eventList = document.getElementById("eventList");

// Loop through events
events.forEach(event => {

    const eventDate = new Date(event.date);

    // Check valid event
    if (eventDate > today && event.seats > 0) {

        // Display event
        const eventInfo = document.createElement("p");

        eventInfo.innerHTML = `
            Event: ${event.name} <br>
            Date: ${event.date} <br>
            Seats: ${event.seats}
            <hr>
        `;

        eventList.appendChild(eventInfo);

    } else {

        console.log(`${event.name} is hidden`);
    }
});

// Registration function with error handling
function registerForEvent(eventName) {

    try {

        const selectedEvent = events.find(
            event => event.name === eventName
        );

        // Check event exists
        if (!selectedEvent) {
            throw new Error("Event not found");
        }

        // Check seats available
        if (selectedEvent.seats <= 0) {
            throw new Error("No seats available");
        }

        // Register user
        selectedEvent.seats--;

        console.log(`Registered for ${eventName}`);
        console.log(`Remaining Seats: ${selectedEvent.seats}`);

    } catch (error) {

        console.error("Registration Error:", error.message);
    }
}

// Test registration
registerForEvent("Music Festival");
registerForEvent("Tech Seminar");