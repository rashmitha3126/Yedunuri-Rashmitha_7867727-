// Event Constructor Function
function Event(name, category, seats) {

    this.name = name;
    this.category = category;
    this.seats = seats;
}

// Add method using prototype
Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    }
    else {
        return "Event Full";
    }
};


// Create Event Objects
const event1 = new Event(
    "JavaScript Workshop",
    "Tech",
    5
);

const event2 = new Event(
    "Music Festival",
    "Entertainment",
    0
);

const event3 = new Event(
    "Coding Bootcamp",
    "Tech",
    3
);


// Store all events in array
const events = [event1, event2, event3];


// Display events
const container =
    document.getElementById("eventContainer");

events.forEach(event => {

    // Get object entries
    const entries =
        Object.entries(event);

    let details = "";

    entries.forEach(([key, value]) => {

        details += `
            <p>
                <strong>${key}</strong> :
                ${value}
            </p>
        `;
    });

    container.innerHTML += `
        <div class="event-card">

            <h2>${event.name}</h2>

            ${details}

            <p>
                <strong>Status:</strong>
                ${event.checkAvailability()}
            </p>

        </div>
    `;
});