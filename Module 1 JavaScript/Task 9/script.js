// DOM Elements
const loading =
    document.getElementById("loading");

const eventContainer =
    document.getElementById("eventContainer");


// Function to display events
function displayEvents(events) {

    eventContainer.innerHTML = "";

    events.forEach(event => {

        const card =
            document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h2>${event.title}</h2>

            <p>
                Event ID:
                ${event.id}
            </p>
        `;

        eventContainer.appendChild(card);
    });
}


// -------------------------------
// Using .then() and .catch()
// -------------------------------

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

    .then(response => {

        return response.json();
    })

    .then(data => {

        loading.style.display = "none";

        displayEvents(data);
    })

    .catch(error => {

        loading.innerHTML =
            "Error loading events";

        console.log(error);
    });


// -------------------------------
// Async / Await Version
// -------------------------------

async function fetchEvents() {

    try {

        loading.style.display = "block";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        const data = await response.json();

        loading.style.display = "none";

        displayEvents(data);
    }
    catch (error) {

        loading.innerHTML =
            "Failed to fetch data";

        console.log(error);
    }
}


// Call async function after 5 sec
setTimeout(() => {

    fetchEvents();

}, 5000);