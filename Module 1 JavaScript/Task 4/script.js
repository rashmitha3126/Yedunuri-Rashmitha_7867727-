// Array to store events
let events = [];

// Function to add event
function addEvent(name, category, seats) {

    const event = {
        name: name,
        category: category,
        seats: seats
    };

    events.push(event);
}

// Function to register user
function registerUser(eventName) {

    const event = events.find(e => e.name === eventName);

    if (event && event.seats > 0) {

        event.seats--;

        console.log(`Registered for ${event.name}`);
    }
    else {
        console.log("No seats available");
    }
}

// Function to filter events by category
function filterEventsByCategory(category, callback) {

    const filtered = events.filter(
        event => event.category === category
    );

    callback(filtered);
}

// Closure function to track registrations
function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `Total registrations: ${totalRegistrations}`
        );
    };
}

// Create closure tracker
const techRegistration = registrationTracker();


// Add events
addEvent("JavaScript Workshop", "Tech", 5);
addEvent("Music Festival", "Entertainment", 3);
addEvent("Coding Bootcamp", "Tech", 2);


// Register users
registerUser("JavaScript Workshop");
techRegistration();

registerUser("Coding Bootcamp");
techRegistration();


// Display filtered events
filterEventsByCategory("Tech", function(filteredEvents) {

    const container =
        document.getElementById("eventContainer");

    filteredEvents.forEach(event => {

        container.innerHTML += `
            <div class="event-card">
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Seats Left: ${event.seats}</p>
            </div>
        `;
    });
});