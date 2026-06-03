// Event Data
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


// DOM Elements
const eventContainer =
    document.getElementById("eventContainer");

const categoryFilter =
    document.getElementById("categoryFilter");

const searchInput =
    document.getElementById("searchInput");


// Display Events
function displayEvents(filteredEvents) {

    eventContainer.innerHTML = "";

    filteredEvents.forEach((event, index) => {

        const card =
            document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h2>${event.name}</h2>

            <p>
                Category:
                ${event.category}
            </p>

            <p>
                Seats Left:
                ${event.seats}
            </p>

            <button onclick="register(${index})">
                Register
            </button>
        `;

        eventContainer.appendChild(card);
    });
}


// Register Button Event
function register(index) {

    if (events[index].seats > 0) {

        events[index].seats--;

        alert("Registration Successful");
    }
    else {

        alert("No Seats Available");
    }

    applyFilters();
}


// onchange Event
categoryFilter.onchange = function () {

    applyFilters();
};


// keydown Event
searchInput.addEventListener(
    "keydown",
    function () {

        setTimeout(() => {

            applyFilters();

        }, 100);
    }
);


// Apply Search + Filter
function applyFilters() {

    const selectedCategory =
        categoryFilter.value;

    const searchText =
        searchInput.value.toLowerCase();

    let filtered = events.filter(event => {

        const matchCategory =
            selectedCategory === "All" ||
            event.category === selectedCategory;

        const matchSearch =
            event.name.toLowerCase()
            .includes(searchText);

        return matchCategory && matchSearch;
    });

    displayEvents(filtered);
}


// Initial Display
displayEvents(events);