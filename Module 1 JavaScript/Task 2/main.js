// Using const for fixed values
const eventName = "Music Festival";
const eventDate = "10 August 2026";

// Using let because seats can change
let availableSeats = 50;

// Display event information using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Function for registration
function registerUser() {

    // Reduce seats by 1
    availableSeats--;

    // Show updated seats
    alert(`Registration Successful!
Remaining Seats: ${availableSeats}`);

    console.log(`Updated Seats: ${availableSeats}`);
}